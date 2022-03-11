https://programmers.co.kr/learn/courses/30/lessons/42861

//다른 분의 코드를 보고 그대로 작성해보며 풀었습니다.
//남에게 설명하듯이 혼자 떠들어보며 풀어봤는데, 푸는 방식을 요약하는 게 쉽지 않아서 그루스칼 알고리즘, 그리고 그루스칼 알고리즘 구현을 위한 
//내부 알고리즘인 union-find 알고리즘에 대해 검색하셔야 코드를 이해하는 데에 문제가 없을 것 같습니다

const getParent = (parent, x) => {
  if(parent[x] === x) return x;
  return parent[x] = getParent(parent, parent[x]);
}

const unionParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  if(n1 < n2) return parent[n2] = n1;
  else return parent[n1] = n2;
}

const findParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  if(n1 === n2) return true;
  else return false;
}

function solution(n, costs) {
  let answer = 0;
  const parent = [];
  for(let i = 0; i < n; i++)
    parent.push(i);
  
  costs.sort((a, b) => a[2] - b[2]);
  
  for(const cost of costs) {
    if(!findParent(parent, cost[0], cost[1])) {
      answer += cost[2];
      unionParent(parent, cost[0], cost[1]);
    }
  }
  
  return answer;
}
