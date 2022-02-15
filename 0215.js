//재귀, 반복문을 사용해서 모든 리스트를 만들어서 풀어도 케이스가 그리 많지 않아서 금방 만들긴 할 것 같다
//이거 말고 매커니즘을 생각해서 푸는 방식도 있던데.. 근데 어떻게 경우의 수를 생각하는건지 머리가 안 돌아가더라.
function solution(word) {
    const arr = ['A', 'E', 'I', 'O', 'U'];
    const result = [];
    
    const getNum = (curWord, depth) => {
        if (depth === 6) return;
        result.push(curWord);
        
        for (const str of arr) {
          getNum(curWord + str, depth + 1);
        }
    };

    arr.forEach((word) => {
        getNum(word, 1);
    });

    return result.indexOf(word) + 1;
}

// 결국 다른 사람 풀이를 봤는데 등비수열의 방식으로 해결했다고 한다.
// 고차함수를 사용해서 푸는 방식은 거의 이와 유사한듯

function solution(word) {
    return word.split('')
            .reduce((a,b,i) => a + ('AEIOU'.indexOf(b)) * (5**(5 - i) - 1) / 4 + 1, 0)
}
