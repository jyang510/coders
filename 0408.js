https://programmers.co.kr/learn/courses/30/lessons/42587

// 했던 문제 다시 풀기 시간
// 과거 풀었던 걸 보니까 some 메소드를 활용하던데...? 때 말고는 한 번도 못 써봐서 솔직히 진짜 모르겠더라 저런 걸 썼었구나
// 코드를 보고 조금 더 깔끔하게 작성해보고 싶어서 코드를 손 봤다. 
// 코드는 깔끔해졌는데, return이 else문 중간에 있어서 한 눈에 보기엔 좋지 못한 코드가 된 듯

function solution(priorities, location) {
    let tmp = [...priorities];
    let max = 0;
    let answer = 0;
    while(tmp.length > 0) {
        max = Math.max(...tmp);
        if(tmp[0] !== max) {
            tmp.push(tmp.shift());
            location > 0 ? location-- : location = tmp.length - 1;
        } else {
            tmp.shift();
            answer++;
            if(location === 0) return answer;
            location > 0 ? location-- : location = tmp.length - 1;
        }
    }
}
