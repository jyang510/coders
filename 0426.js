https://programmers.co.kr/learn/courses/30/lessons/60058

// 이건 나에겐 문제가 난해해서 다른 분들이 푸신 것을 참조해서 공부했다. 재귀를 이용해 푸시는 코드인데 아래 링크를 참고했다
// https://velog.io/@swanious/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B4%84%ED%98%B8-%EB%B3%80%ED%99%98-javascript

function solution(p) {
    var answer = '';
    var open = 0;
    var close = 0;
    
    // 1. 재귀 탈출 조건
    if (!p) return ''; 
    
    for (let i=0; i<p.length; i++) {
        if (p[i] === '(') open++
        else close++
        
        // 균형일 때 "올바른 괄호 문자열"인지 아닌지 판단
        if (open === close) {
            // 2, 3, 3-1
            if (check(p.slice(0, i+1))) {
                answer = p.slice(0, i+1) + solution(p.slice(i+1));
                return answer;
            } else {
                // 4-1, 4-2, 4-3
                answer = '(' + solution(p.slice(i+1)) + ')';
                
                // 4-4
                for (let j=1; j<i; j++) {
                    if (p[j] === '(') {
                        answer = answer + ')'
                    } else {
                        answer = answer + '('
                    }
                }
                // 4-5
                return answer;
            }
        }
    }    
}

// 올바른 괄호 문자열인지 판단하는 함수
function check(p) {
    var stack = [];
    for (let i = 0; i<p.length; i++) {
        if (p[i] === '(') stack.push('(')
        else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return true;
}
