https://programmers.co.kr/learn/courses/30/lessons/82612

// 아쉬운 점) Math.abs를 쓰는 게 -answer라고 적는 것보다 더 의도가 잘 보였을 것 같다.

function solution(price, money, count) {
    let total = 0;
    
    for (let i = 1; i <= count; i++) {
        total += price * i;
    }
    const answer = money - total;
    if (answer > 0) return 0;
    return -answer;
}
