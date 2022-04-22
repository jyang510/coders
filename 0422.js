https://programmers.co.kr/learn/courses/30/lessons/60057

// 결국 압축이 가능한가 아닌가를 판단하는 게 중요한데 (두 문자열의 비교)
// 이중 for문을 사용하는 것보단 시간복잡도 면에서 더 좋은 방식이 있을 것 같았는데 내 망상이었던 것 같다. 결국 나 스스로는 풀지 못했고
// 다른 분들의 블로그나 프로그래머스 풀이를 보다보니 결국 이 방식이 깔끔하고 좋은 것 같아서 코드를 작성해본다

function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let str = "";
    let cnt = 1;
    let tempStr = s.substr(0, i);
    let idx = 0;

    for (idx = i; idx <= s.length; idx += i) {
      let nextStr = s.substr(idx, i);

      if (tempStr === nextStr) {
        cnt += 1;
      } else {
        if (cnt === 1) str = str + tempStr;
        else str = str + cnt + tempStr;

        cnt = 1;
        tempStr = nextStr;
      }
    }
    if (cnt === 1) str = str + tempStr;
    else str = str + cnt + tempStr;
    answer = Math.min(answer, str.length);
  }

  return answer;
}

// 원본 코드
https://wonyoung2257.tistory.com/26
