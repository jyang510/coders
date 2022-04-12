https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
    var answer = 0;
    let map = {};
    let MAX = 1e7;
    const numstr = [];
    const pn = new Array(MAX).fill().map(v=>0);
    pn[0] = pn[1] = 1;
    for(let i=2; i<=Math.sqrt(MAX); i++) {
        if(!pn[i]) {
            for(let j=i+i; j<MAX; j+=i) {
                pn[j] = 1;
            }
        }
    }
    numbers = numbers.split("");
    function permutation(d, str, visited) {
        if(d === numbers.length) {
            numstr.push(str);
            return;
        }
        for(let i=0; i<numbers.length; i++) {
            if(!(visited & (1<<i))) {
                permutation(d+1, str+numbers[i], visited | (1<<i));
            }
        }
    }
    function select(idx, str, picked) {
        if(idx === str.length) {
            if(picked === "") return;
            const num = parseInt(picked);
            if(!map[num]) {
                map[num] = 1;
                if(!pn[num]) answer++;
            }
            return;
        }
        select(idx+1, str, picked);
        select(idx+1, str, picked+str[idx]);
    }
    permutation(0, "", 0);
    for(let curr of numstr) {
        select(0, curr, "");
    }
    return answer;
}


// 다른 분 블로그의 레퍼런스
function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((v) => [v]);
  else {
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });
  }

  return results;
}

// 소수인지 판별
function isPrime(num) {
  // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
  // num > i
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
    }
  }
  // 소수는 1보다 큰 정수임으로
  // 1보다 작으면 false를 리턴한다
  return num > 1;
}

function solution(numbers) {
  let answer = 0;

  const candiArr = [];

  const splitArr = numbers.split("");
  for (let i = 1; i < numbers.length + 1; i++) {
    candiArr.push(
      ...getPermutations(splitArr, i).map((v) => Number(v.join("")))
    );
  }

  const candiSet = new Set(candiArr);
  candiSet.forEach(function (v) {
    if (isPrime(v)) answer++;
  });

  return answer;
}
