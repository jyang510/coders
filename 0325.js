https://programmers.co.kr/learn/courses/30/lessons/12925

//이렇게 양자택일의 문제인 경우엔 리턴 값에 단순히 삼항연산자를 통해 나눠도 될 것 같다
// 코드가 줄어드는 건 좋은 거라서,이렇게 쓸데없이 길 이유는 없는 것 같다
function solution(s) {
    let answer = '';
    if (s.length % 2 === 0) {
        answer += s[s.length / 2 - 1];
    }
    answer += s[parseInt(s.length / 2)];
    
    return answer;
}
