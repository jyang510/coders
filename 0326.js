https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    if (s.length % 2 === 0) {
        answer += s[s.length / 2 - 1];
    }
    let answer = s[parseInt(s.length / 2)];
    
    return answer;
}

// 3/30일 추가
// 다른 사람 풀이를 좀 더 참고해봤다 이 문제만이 아니고 몇 가지 코드를 더 다른 사람 풀이를 보면서 참고해볼듯
// 방식 자체는 다른 게 없지만 Math.ceil을 사용해 근사값 중 가장 작은 정수를 리턴해주는 것이나(내 코드에선 parseInt를 사용)
// 삼항 연산자를 사용하는 것으로 한 줄로 코드를 짠 게 좋았던 것 같다

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
