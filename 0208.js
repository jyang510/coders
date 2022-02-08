//https://programmers.co.kr/learn/courses/30/lessons/92342

//원래는 과녁당 효율이 좋기 위해서 화살당 과녁의 점수를 계산해서 풀어야하는줄 알았다. 예를 들자면
//10점 과녁에 어피치가 3발 맞추면 라이언은 4발 맞춰야하니 10 /4 = 2.5점. 이러면 3점 1발 맞추는 게 더 이득이네. < 이런식으로
//근데 이러면 어떻게 코드를 짜야하는지 감이 안 잡혀서 좀 더 고민해보다가 관점을 조금 바꿨더니 감이 잡혔다.

//어피치보다 무조건 1발 더 맞춰야 점수를 얻는다
//그러면 결국 배열의 요소 11개당 선택지는 2개(어피치 + 1발 혹은 0발)고 그러면 완전 탐색을 해봐야
//2^11 이라 2048번만 탐색하면 된다. 

//여기까진 혼자 알아냈는데 이후 조건 중 낮은 점수를 가장 많이 맞힌 걸 리턴하라는데 그 구현방식을 모르겠다.

//결국 검색했다..ㅋㅋㅋㅋㅋㅋㅋㅋ
//낮은 점수부터 차근차근 완전 탐색을 돌려보면서, 가장 높은 점수를 얻어낸 것에 따라 ryonInfo값이 달라지면 된다고 한다.
//그러고 남은 화살이 있는 경우의 수가 있는데, 그건 다 0점 과녁에 맞춘다고 생각하면 된다고 한다. 

function solution(n, info) {
  //점수 차이 변수
  let maxDiff = 0;
  //라이언 과녁 배열
  let ryonInfo = Array(11).fill(0);
  
  const shot = (peachScore, ryonScore, count, idx, board) => {
    if (n < count) return ;
    if (idx > 10) {
      let diff = ryonScore - peachScore;
      if (diff > maxDiff) {
        board[10] = n - count;
        maxDiff = diff
        ryonInfo = board;
      }
      return;
    }
    if (n > count) {
      let board2 = [...board];
      board2[10 - idx] = info[10 - idx] + 1;
      shot(peachScore, ryonScore + idx, count + info[10 - idx] + 1, idx + 1, board2);
    }
    
    if (info[10 - idx] > 0){
      shot(peachScore + idx, ryonScore, count, idx + 1, board)
    } else {
      shot(peachScore, ryonScore, count, idx + 1, board)
    }
  }
  shot(0, 0, 0, 0, ryonInfo)
  
  if (maxDiff <= 0) {
    return [-1];   
  } else {
    return ryonInfo;  
  }
}
