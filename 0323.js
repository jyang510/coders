https://programmers.co.kr/learn/courses/30/lessons/12977

// 자바스크립트 소수판별이라고 검색하면 많은 글들이 나오는데 그 중에서 이 글을 참고하여 소수 판별 함수를 짰습니다.
// https://ant-programmer.tistory.com/2
// 어떤 데이터를 다루느냐에 따라 다르겠지만 데이터가 많아질 것을 생각하면 O(루트n)과 O(n)의 차이는 엄청나서
// 시간복잡도를 생각했을 경우에 사실 Math.sqrt를 쓰는 게 무조건 옳긴 한 것 같습니다. 이번엔 그렇게 풀지 않았습니다.
function solution(nums) {
  var answer = 0;
  let sumNum = 0;
    
  function findPrimeNum(num) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
    return num > 1;
  }
    
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sumNum = nums[i] + nums[j] + nums[k];
        if (findPrimeNum(sumNum)) answer++;
      }
    }
  }

  return answer;
}
