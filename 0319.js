https://programmers.co.kr/learn/courses/30/lessons/12917

// split 한 후에 sort를 하는 것까진 했는데, 대문자를 어떻게 해야 하는지 모르겠더라.
// 자바스크립트 문자열 반전이라고 치면 첫 글에 reverse()를 사용하라고 나오는데, 이걸 보고 따라했다.
// 다른 사람 풀이 1등의 정답도 나랑 똑같더라. 자바스크립트 내장 함수를 이용하다보니 그런듯

function solution(s) {
    let answer = s.split('').sort().reverse();
    let result = answer.join('');
    return result;
}
