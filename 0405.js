
// 요근래 레벨2 문제를 거의 다 풀고나니 레벨 3을 푸는데 거의 못 푸는 경우가 잦아서 
// 이렇게 예전 꺼 복습하는 걸 많이 올리게 되는 거 같은데, 내일은 진짜 레벨 3짜리 올려야겠다
// https://programmers.co.kr/learn/courses/30/lessons/92342


function solution(n, info) {
  let maxDiff = 0;
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
