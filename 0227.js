https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let sorted = people.sort((a, b) => a - b);
  let count = people.length;

  let j = sorted.length - 1  
  for (let i = 0; i < j; j--;) {
    if (sorted[i] + sorted[j] <= limit) {
      count--;
      i++;
    }
  }
  return count;
}
