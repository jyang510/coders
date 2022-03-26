https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    if (s.length % 2 === 0) {
        answer += s[s.length / 2 - 1];
    }
    let answer = s[parseInt(s.length / 2)];
    
    return answer;
}
