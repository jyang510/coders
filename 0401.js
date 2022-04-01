https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target){
    var answer = 0;
    
    function exc(idx, sum){
        if(idx == numbers.length){
            if(sum == target){
                answer++;
            }
            return;
        }
        exc(idx+1, sum + numbers[idx]);
        exc(idx+1, sum - numbers[idx]);
    }
    exc(0, 0);
    
    return answer;
}
