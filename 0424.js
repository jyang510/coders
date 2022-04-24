https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
    // answer의 첫째 요소는 이진변환 횟수,  둘째 요소는 제거한 0의 개수를 저장한다.
    let answer = [0, 0];
    let str = s;
  
    while (str !== '1'){
      let tmpLength = str.match(/[1]/g).length;
      answer[0]++;
      answer[1] += str.length - tmpLength;
      str = len.toString(2);
    }
  
    return answer;
}
