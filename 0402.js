https://programmers.co.kr/learn/courses/30/lessons/42860

//주말이라 오랜만에 풀었던 문제 다시 풀어봐야지 했는데 또 2시간동안 헤맨 문제..ㅋㅋㅋㅋㅋㅋ
//처음에 했었던 방식을 벗어나질 못했다. 
//for문을 통해 반복하면서 얼마나 움직이는지 추가해주는 점도, 어느쪽으로 움직여야 최소가 되는지 판단하는 방식도(diff를 13 전후로 비교하여 answer에 값을 더해주는 방식)
//그래서 아래에 다른 분 코드도 한 번 참고해봤다.

function solution(name) {
    var answer = 0;
    let temp = [];
    for(let i = 0; i < name.length; i++) {
        temp.push('A');
        let diff = name[i].charCodeAt() - temp[i].charCodeAt();
        answer += diff > 13 ? 26 - diff : diff;
    }
    let minMove = name.length - 1;
    let j = 0;
    for(let i = 1; i < name.length; i++){
        if(name[i] === 'A'){
            for(j = i + 1; j < name.length; j++){
                if(name[j] !== 'A') break;
            }
            const left = i - 1;
            const right = name.length - j;
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);
            i = j;
        } 
    }
    return answer + minMove;
}

//다른 분 코드
//이 분은 아스키코드값으로 확인하셨는데 A가 65, Z가 90이다.
//보면 startto와 endto의 값을 가지고 비교한다. 그래서 얻은 tmp값이 내 코드에서 answer와 똑같은 역할을 한다
//그거 말곤 사실 그리 특별하게 다른 건 없다.. 굳이 있다면 turn쪽에서 비교하는 게 조금 다른데 크게 차이날 부분이 없음
//이거 말고 정말 나랑 아예 다른 코드를 보고 싶었는데 너무 코드가 난잡하거나 의미 없는 경우가 많아서 못 가져왔다
function solution(name) {
  let answer = 0;
  let n = name.length;
  let tmp = 0, turn = n-1;

  for(let i = 0; i < n; i++){
    let startto = name.charCodeAt(i) - 65;
    let endto = 90 - name.charCodeAt(i) + 1;

    if(startto > endto){
      tmp = tmp + endto;
    } else {
      tmp = tmp + startto;
    }

    let next = i + 1;
    while(next < n && name[next] === 'A'){
      next++;
    }

    turn = Math.min(turn, i+n-next+Math.min(i,n-next));
  }
  tmp = tmp + turn;
  answer = tmp;
  return answer;
}
