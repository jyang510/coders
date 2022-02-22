https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
    let answer = n + 1;

    while (1) {
        const n_el = n.toString(2).split(``).filter(v => v === `1`).length;
        const answer_el = answer.toString(2).split(``).filter(v => v === `1`).length;

        if (n_el === answer_el) {
            break;
        }
        answer++;
    }
    return answer;
}
