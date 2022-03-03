https://programmers.co.kr/learn/courses/30/lessons/42747

// 문제가 이해하기 어려운데, citations 배열로 받은 요소들은 인용 횟수이기 때문에
// h편 이상이고 h번 이상 인용되어야 하니까, 인용 횟수를 정렬해서
// 몇 편 이상인지 확인(인덱스로 확인), 인용 횟수 확인(요소로 확인)
// 하여 H-index 값을 도출해내면 된다. 설명이 미흡하지만 문제를 좀 풀면 이해가 될 듯
function solution(citations) {
    let answers = 0;
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        if (i < citations[i]) {
            answers++;
        }
    }
    return answers;
}
