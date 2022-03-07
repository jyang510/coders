https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
    let answer = [words[0]];
    console.log(words[0])
    let cnt = 1; 
    for(let i = 1; i < words.length; i++){ 
        let prev = words[i - 1]; 
        let now = words[i]; 
        if(now.length <= 1) { 
            return [i % n + 1, cnt]; 
        }
        if(prev[prev.length - 1] !== now[0]) { 
            console.log('이거는?', prev[prev.length - 1] )
            return [i % n + 1, cnt];
        }
        if(answer.includes(now)) {
            return [i % n + 1, cnt];
        }
        if(i % n + 1 === n) { 
            cnt++; 
        }
        answer.push(now); 
    }
    return answer = [0, 0]; 
}
