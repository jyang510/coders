/https://programmers.co.kr/learn/courses/30/lessons/72410

//문자열 변경은 연습할 겸 정규표현식으로 풀려고 해봤는데, 솔직히 밑천이 부족해서 
//책을 보고 MDN 보면서 해도 정확히 어떻게 적어야 하는지 모르겠더라.

//원래 짰던 코드 
function solution(new_id) {
  const answer = new_id.toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/.{2,}/g, '.')
    .replace(/^\.) //여기서부터 잘 모르겠는데?
    //위 조건은 잘 모르겠는데 아래 2개는 옳게 적은 것 같음
    .replace(/^$/, 'a'). slice(0, 15)
}

//여기서 한계를 느껴서..ㅋㅋㅋㅋ 다른 분들의 코드를 보면서 공부했다.
// ^ : 문장의 시작
// $ : 문장의 끝
// \w : word 문자
// .{2,} : .이 최소 2개 이상
// | : 또는

function solution(new_id) {    
    const answer = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15).replace(/\.$/, '');
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

// 개념적으론 알고 있는데, 막상 한글로 적힌 조건을 보고 쓰려고 하니까 제대로 안 되더라. 레벨 2라는데 굉장히 어렵게 느껴졌다

//다른 사람 풀이를 보니 정규표현식으로 풀지 않고 푸신 분도 봤다. 크게 다른 특이점은 없고, toLowerCase()를 하면 어차피 문자열을 반복해 돌면서 소문자로 바꾸니
//반복문 안에서 char 하나하나에 toLowerCase()를 하셔서 문자열을 2번이나 도는 불상사를 막으셨다. 다만 조건이 길이 1000 이하인 문자열인데 굳이 이렇게 할 이유가 있나
//싶은 생각이 들었다.
function solution(nid) {
  var ans = '';
  for (let i = 0; i < nid.length; i++) {
    let char = nid[i].toLowerCase();
    if ('0123456789abcdefghijklmnopqrstuvwxyz.-_'.indexOf(char) === -1) continue;
    if (char === '.' && ans[ans.length - 1] === '.' && nid[i - 1]) continue;
    ans += char;
  }
  if (ans[0] === '.') ans = ans.rslice(1);
  ans = ans.slice(0, 15);
  if (ans[ans.length - 1] === '.') ans = ans.slice(0, ans.length - 1);
  if (!ans) ans = 'a';
  while (ans.length < 3) ans += ans[ans.length - 1];
  return ans;
}
