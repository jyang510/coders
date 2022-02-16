https://programmers.co.kr/learn/courses/30/lessons/12945

// 피보나치를 할 때 이미 계산한 값을 다시 계산하면 정말 답도 없는 런타임이 나오기 때문에
// 이미 계산해서 배열 안에 저장한 값이 있을 경우엔 배열에서 꺼내서 쓰는 방식으로 구현해야 할 것 같다

function solution(n) {
    let newArr = [0, 1];
    
    let fibo = (n) => {
        if (newArr[n] !== undefined){ 
          return newArr[n];
        }
        newArr[n] = fibo(n - 1) + fibo(n - 2);
        return newArr[n];
    };
    let result = fibo(n) % 1234567;
  return result ;
}
// 테스트 7~14까지 실패가 뜬다 심지어 13~14는 시간복잡도 문제가 발생한다..
// 재귀로 하면 너무 느린가..? 반복문으로 해야하나..?

// 그래서 이번엔 재귀가 아니고 반복문으로 처리해줬음
function solution(n) {
    let result = [0, 1];
    for(let i =2; i <= n; i++){
        let sum = result[i - 2] + result[i - 1];
        result.push(sum);
    }
    let answer = result[n] % 1234567;
    return answer;
}

//이번에도 7~ 14까지 전부 다 실패했다 이번엔 느리진 않다고 한다
//그럼 뭐지..? 진짜진짜진짜 뭐지..? 
// 질문하기 글들을 보니 이 문제는 각 피보나치 수를 1234567로 나눈 나머지의 피보나치수열을 만들라는 문제였다... 그래서 그대로 코드를 수정해줬다 
function solution(n) {
    let result = [0, 1];
    for(let i =2; i <= n; i++){
        let sum = result[i - 2] + result[i - 1];
        result.push(sum % 1234567);
    }
    let answer = result[n] % 1234567;
    return answer;
}
