https://programmers.co.kr/learn/courses/30/lessons/12973


//  문제가 크게 어렵지 않아서 오늘은 그다지 고민하지 않고 금방 풀었다

function solution(s){
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(arr[arr.length - 1] != s[i]) {
            arr.push(s[i]);
        } else {
            arr.pop();
        }
    }
    return (arr.length > 0) ? 0 : 1;
}
