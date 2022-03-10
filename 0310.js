https://programmers.co.kr/learn/courses/30/lessons/1845

const solution = nums => {
    let answer = [...new Set(nums)];
    let limit = nums.length / 2;

    return answer.length > limit ? limit : answer.length;
}
