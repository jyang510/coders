https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
    // numbers를 sort()해서 정렬시킨 후에
    // 전진하면서 있는 것 없는 것 확인하면 될 것 같음
    
    // 라고 생각하고 작성하다가 조건이 큰 값인 것도 아니고 확장성 고려해서 코드 짤 이유가 있나 싶은 마음에
    // 그냥 includes로 해결했다
    let answer = 0;
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            answer += i;
        }
    }
    return answer;
}
