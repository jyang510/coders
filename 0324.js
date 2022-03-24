https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    // 단순히 알파벳 문자열 나열해서 풀기보단 아스키코드 값을 이용하는 게 훨씬 편할 것 같음
    // a ~ z는 97부터 122 A ~ Z는 65 ~ 90이다. 
    let answer = '';
    let asc = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            continue;
        }
        asc = s[i].charCodeAt() + n;
        if ((asc >= 65 && asc <= 90) || (asc >= 97 && asc <= 122)) {
            answer += String.fromCharCode(asc);
        } else {
            answer += String.fromCharCode(asc - 26);
        }
    }
    return answer;
}
// 이렇게 했는데 테스트케이스에서 자꾸 틀리다길래 이유가 뭔가 고민해봤는데
// 대문자 끝과 첫 소문자간의 아스키코드 값 차이가 7밖에 나지 않아 n값이 클 경우 대문자가 소문자 아스키값으로 바뀌어 제대로 바꾸지 못하는 로직이라는 걸 깨달았다. 
function solution(s, n) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += s[i];
            continue;
        }
        if (s[i].toUpperCase().charCodeAt() + n > 90) {
            answer += String.fromCharCode(s[i].charCodeAt() + n - 26);
        } else {
            answer += String.fromCharCode(s[i].charCodeAt() + n);
        }
    }
    return answer;
}
