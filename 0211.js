https://programmers.co.kr/learn/courses/30/lessons/77884

// 나누는 함수가 필요할 것 같아서 함수를 따로 만들고 그 함수를 통해 약수를 알아내는 방식으로 구현했다
// 다른 사람들의 풀이를 보니까, 제곱근이 정수라면 약수의 개수가 홀수라는데 무슨 소린지 조금 더 공부해서
// 블로그에 작성해봐야 할 듯

function solution(left, right) {
    let answer = 0;

    function divisors(num) {
        let count = 0;

        for(let i = 1; i <= num; i++) {
            if(num % i == 0) {
                count++;
            }
        }

        return count;
    }

    for(let i = left; i <= right; i++) {
        let count = divisors(i);          
        if (count % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }      
    }   
    
    return answer;
}
