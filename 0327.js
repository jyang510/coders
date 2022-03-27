https://programmers.co.kr/learn/courses/30/lessons/12932


//주말이라 쉬어가기 레벨 1문제
function solution(n) {
    return n.toString().split('').reverse().map((el) => { 
        return parseInt(el);
    });
}
