https://programmers.co.kr/learn/courses/30/lessons/12925

function solution(s) {
    let n = 1;
    if (s[0] === '-') {
        return - Number(s.substr(1, s.length - 1));
    }
    return Number(s);
}
