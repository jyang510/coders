https://programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([]);
    }
    let num = 0;
    let row = -1;
    let column = 0;
    
   // 맨 위 꼭짓점부터 시작해 오른쪽 변의 숫자를 센다는 감각으로 반복문을 돌린다  
   //예시의 n이 5인 경우를 생각하면, 맨 위부터 오른쪽 꼭짓점까지 5, 오른쪽 꼭짓점을 기준으로 안 센오른쪽 변의 세면 4. 또 반복하면 3, 2, 1.. 총 15.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (i % 3 === 0) {
                arr[++row][column] = ++num;
            } 
            else if (i % 3 === 1) {
                arr[row][++column] = ++num;
            } 
            else {
                arr[--row][--column] = ++num;
            }
        }
    }

    let result = [];
    arr.forEach((x) => {
        result.push(...x);
    });
    return result;
}
