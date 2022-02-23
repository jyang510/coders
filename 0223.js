https://programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
    let answer = 0;
    const visited = new Array(dungeons.length).fill(false);

    const dfs = (k, arr, count) => {
        arr.forEach(([a, b], i) => {
            if(!visited[i] && k >= a) {
                visited[i] = true;
                dfs(k - b, arr, count + 1)
                visited[i] = false;
            }
        })
        answer = Math.max(answer, count);
    }

    dfs(k, dungeons, 0);
    return answer;
}
