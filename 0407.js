https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  let answer = [];
  // 이걸 좀 더 깔끔하게 할 수 있었을 거 같다. 정규표현식을 사용해서 간추리는 방식을 사용하시는 분들도 많더라
  const str = s.replace('{{', '').replace('}}', '').split('},{');
  let obj = {}
  
  str.forEach((e) => {
    let num = e.split(',');
    obj[num.length] = num;
  });
    
  let prev = [];
  for (let i = 0; i < str.length; i++) {
    answer.push(parseInt(obj[i + 1].filter(x => !prev.includes(x))));
    prev = obj[i + 1];
  }
    
  return answer;
}
