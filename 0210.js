https://programmers.co.kr/learn/courses/30/lessons/76501

// true false에 따라 더할지 뺄지 생각하면 되서 단순히 for문으로 해결했지만, 비슷한 양상의 문제 중에 reduce를 써서 해결하는 답변을 보고 그런 식으로 짜면 좋겠다 싶어서 2개 작성했다.
// 무조건 아래 코드가 좋다고 볼 수는 없지만 훨씬 깔끔하고 문제를 보고 코드를 봤을 때 무리 없이 이해할 수 있는 수준인 것 같다.

function solution(absolutes, signs) {
    var answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            answer += absolutes[i];
            continue;
        }
        answer -= absolutes[i];
    }
    return answer;
}

// signs 요소 값에 따라 1 혹은 -1을 곱해 부호를 바꿔서 계산하는 방식. for문이랑 하는 건 거진 다를 바가 없지만 훨씬 코드가 깔끔하다.
function solution(absolutes, signs) {
    const answer = absolutes.reduce((acc, cal, i) => acc + (cal * (signs[i] ? 1 : -1)), 0);
    return answer;
}
