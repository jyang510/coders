https://programmers.co.kr/learn/courses/30/lessons/12981


//첫번째 시행착오

function solution(n, words) {
    const answer = [];
    let failer = false;
    let order = 1, count = 1;


    // 배열로 받는거라서 map 고차함수를 쓸까 하다가, 굳이 map으로 배열을 건드리기까지 할 이유가 없는 것 같아서
    // 그냥 반복문을 통해서 값을 구하는 게 나을 것 같더라.
    // 풀다보니 reduce는 쓸 수 있을 것 같은데, 이미 반복문으로 풀고 있으니 풀다가 reduce해봐야할 듯...ㅋㅋㅋㅋㅋ
    for(let i = 0; i < words.length; i++) {
        //이미 있다면, 탈락자 변수 값 바꾸고 몫과 나머지 연산
        order++;
        if (answer.includes(words[i]) || (words[i - 1][words[i - 1].length - 1] === words[i][0])) {
            failer = true;
            break;
        }
        if (order === n) {
            order = 0;
            count++;
        }
        answer.push(words[i]);
    }
    if (failer) return [order, count];
    return [0, 0];
}
// 다 좋은데, 끝말과 다음 단어의 첫글자가 일치하는지 여부를 제대로 받아내지 못했다.
// 게다가 보기 안 좋게 지저분해서, 방식 자체는 그대로 고수하되 코드를 다듬어보기로 했다.

function solution(n, words) {
    const answer = [];
    let now = words[0];
    let count = 1,order = 1;

    answer.push(now);
    words = words.slice(1);
    for (let next of words) {
        if (++order > n) {
            order = 1;
            count++;
        }
        if (now[now.length - 1] !== next[0] || answer.includes(next))
            return [order, count];
        voca.push(next);
        now = next;
    }
    return [0, 0];
}

// 성공
