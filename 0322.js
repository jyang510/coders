https://programmers.co.kr/learn/courses/30/lessons/12973


//  문제가 크게 어렵지 않아서 오늘은 그다지 고민하지 않고 금방 풀었다

function solution(s){
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(arr[arr.length - 1] != s[i]) {
            arr.push(s[i]);
        } else {
            arr.pop();
        }
    }
    return (arr.length > 0) ? 0 : 1;
}

// 3/30 다른 사람 풀이 추가
// 이 문제 말고도 몇 문제 추가로 작성할 예정

// 이번엔 다른 분들이 푼 방식과 내가 푼 방식이 다른 점이 거의 없어서 기분이 좋았다. 슬슬 나도 프로그래머스에 맞는 코드를 짜고 있나?
// 방식 자체가 유사해 특별히 더 뭘 붙이지 않고 코드만 작성한다 

const solution = (s) => {
  if (s.length % 2 != 0) return 0;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const b = s.charAt(i);
    if (stack[stack.length - 1] === b) {
      stack.pop();
    } else {
      stack.push(b);
    }
  }

  return stack.length > 0 ? 0 : 1;
};
