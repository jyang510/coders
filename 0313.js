https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    let answer = 0;
    let sortedD = d.sort((a, b) => a - b);
    sortedD.reduce((acc, cur) => {
        if (acc >= cur) {
            acc -= cur;
            answer++;
        }
        return acc;
    }, budget);
    return answer;
}

//다른 사람의 문제 풀이 방식 중에 너무 신박한 게 있어서 가져와봤다.  "~" <- 이게 도대체 무슨 문법인가 했더니 비트를 뒤집는 거란다.
//이런 게 있는 것도 신기하긴 한데 비트를 왜 뒤집는 건지 이해가 잘 안 되서 가져와봤다. 왜 뒤집는거지..?ㅋㅋㅋㅋㅋ 다시 봐도 잘 이해가 안되넹.
function solution(d, budget) {
    return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
}
