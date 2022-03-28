https://programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
    let noncha = maps.length
    let cha = maps[0].length
    let queue = [[0,0]]; 
    let cnt = 1;
    while(queue.length > 0) {
        for(let i = 0; i < queue.length; i++) {
            let [row, col] = queue.shift();
            if(row === noncha - 1 && col === cha - 1) { 
                return cnt; 
            }
            if(row + 1 < noncha && maps[row + 1][col] === 1) {
                queue.push([row + 1, col])
                maps[row + 1][col] = 0
            }
            if(row - 1 >= 0 && maps[row - 1][col] === 1) {
                queue.push([row - 1, col])
                maps[row - 1][col] = 0
            }
            if(col + 1 < cha && maps[row][col + 1] === 1) {
                queue.push([row, col + 1])
                maps[row][col + 1] = 0
            }
            if(col - 1 >= 0 && maps[row][col - 1] === 1) {
                queue.push([row, col - 1])
                maps[row][col - 1] = 0
            }
        }
        cnt++
    }
    return -1;
}

// 몇 가지 예외사항에서 걸린다. 왜 그런지 생각해보니, 선택지가 2개 있을 경우나 몇 가지 케이스를 제대로 인식하지 못하는 것 같음
// 그래서 정답자 코드를 보고 왔다. 방식 자체는 이해했는데, 내가 다시 본다고 이대로 풀 수 있을지 모르겠더라. 나중에 다시 한 번 풀어봐야 할 듯

function solution(s) {
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    const queue = [[0,0,1]];

    while ( queue.length ) {
        const cur = queue.shift();
        if ( cur[0] === maps.length - 1 && cur[1] === maps[0].length - 1) 
            return cur[2]
        for(let i=0;i<4;i+=1){
            const yy = cur[0] + dy[i]
            const xx = cur[1] + dx[i]
            if(xx >= 0 && yy >= 0 && xx < maps[0].length && yy < maps.length && maps[yy][xx] === 1 ) {
                maps[yy][xx] = 0;
                queue.push([yy, xx, cur[2] + 1]);    
            }
        }
    }
    return -1
}

