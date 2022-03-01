https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    let result = [];
    // 걸리는 일수 계산
    // for 반복문을 돌면서 i번째 인덱스 기능이 걸리는 일수 계산하여 배열에 저장
    for (let i = 0; i < progresses.length; i++) {
        //계산하고 배열에 푸쉬
        let func = progresses[i], count = 0;
        while (func < 100) {
            func += speeds[i];
            count++;
        }
        result.push(count);
    }
    //map이나 reduce를 써보고 싶었는데 map은 배열의 길이가 달라져야 해서 안 될 것 같고, reduce는 그 당시엔 안 될 거라고 판단했는데 생각해보니 reduce 바깥에서 사용할 변수 2개 정도만 넣으면 쓸 수 있었을 것 같다.
    let answer = [];
    for (let j = 0; j < result.length; j++) {
        let func = 0;
        let k = j + 1;
        while (result[j] >= result[k]) {
            k++;
            func++;
        }
        answer.push(func + 1); 
        j = k - 1;
    }
    
    
    return answer;
}
