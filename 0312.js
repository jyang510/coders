https://programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
    const answer = arr1.map((first) => {
        return arr2[0].map((second, idx) => {
            return first.reduce((acc, cur, idx2) => {
                let result = (acc + cur * arr2[idx2][idx]);
                return result;
            }, 0)
        })
    })
    return answer;
}
