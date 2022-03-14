https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    let str= s.toLowerCase();
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(str[i] === 'p') count++;
        else if(str[i] === 'y') count--;
    }
    return count === 0 ? true : false;
}
