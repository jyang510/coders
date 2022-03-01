https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
    let answer = [];
    let i = 0, j = 0;
    while(i < k) {
        if (answer.length === 0 || answer[answer.length - 1] >= number[j]) {
            answer.push(number[j]);
            j++;
        } else {
            answer.pop();
            i++;      
        }
    }
    return answer.join('') + number.slice(j);
}
