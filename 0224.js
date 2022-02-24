https://programmers.co.kr/learn/courses/30/lessons/42860

// 최적화 해야하는 건 움직이는 것과 알파벳 변경
// 바꾸는 건 알파벳 차이만큼으로 계산하고, 움직이는 건 양 옆에서 얼마나 이동해야하는 지 확인
// 반복하면서 리턴된 값을 출력
function solution(name) {
    var answer = 0;
    let temp = [];
    for(let i = 0; i < name.length; i++) {
        temp.push('A');
        let diff = name[i].charCodeAt() - temp[i].charCodeAt();
        // 알파벳 중간값으로 어떤 값을 받아야 최솟값으로 받는지 확인하고 더하기.
        answer += diff > 13 ? 26 - diff : diff;
    }
    let minMove = name.length - 1;
    // j를 써야할 곳이 for문 바깥에 있어서 따로 빼줌
    let j = 0;
    for(let i = 1; i < name.length; i++){
        if(name[i] === 'A'){
            for(j = i + 1; j < name.length; j++){
                if(name[j] !== 'A') break;
            }
            const left = i - 1;
            const right = name.length - j;
// 이 부분을 원래 Math.min으로 할 생각은 못했는데 다른 사람들 풀이를 보니까 Math.min, Math.abs를 잘 활용하길래 신기해서 다른 사람들 코드를 보고 비슷하게 코드를 작성해봤다
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);
            i = j;
        } 
    }
    return answer + minMove;
}
