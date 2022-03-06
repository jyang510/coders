https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  // 갈색 노란색 합치면 전체 개수인 것까진 생각헀는데 이후에 어떤 식으로 가로 세로 길이를 파악해야 할 지 잘 몰랐다가
  // 가로가 세로보다 길다고 하니까 약수로 나눠서 판단하면 되겠구나 싶었다. 세로는 Math.sqrt로 루트값의 정수 부분 이상은
  // 세로 길이가 나올 수 없으니 그걸로 제한했다
  const sum = brown + yellow;
  let limit = parseInt(Math.sqrt(sum));
  for (let y = 3; y <= limit; y++) {
    if (sum % y === 0) {
      let x = sum / y;
      if ((x - 2) * (y - 2) === yellow) {
        return [x, y];
      }
    }
  }
}
