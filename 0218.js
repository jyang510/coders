https://programmers.co.kr/learn/courses/30/lessons/17686

// 정규 표현식을 모르니까 코드가 길어지기만 하고 몇몇 예시가 안 풀리더라... 그래서 블로그에서 코드를 검색해봤다

// 정규 표현식은 문자열을 대상으로 패턴 매칭 기능을 제공해준다는 건데, 여기 문제에선
// 첫번째 정렬은 문자고, 이어지는 숫자 문자열의 구분까지 간단하게 체크할 수 있는 역할을 한다(tail부분은 신경 안 씀)
// 원래라면 위 조건을 조건문과 반복문을 통해 일일이 해결해줘야하지만 정규표현식을 통해 코드를 짧게 만든다.

// 정규 표현식은 패턴과 플래그로 구성되어있는데 //로 감싸진 부분이 패턴, 그 다음 나오는 걸 플래그라고 한다.
function solution(files) {
  // \D는 숫자가 아닌 문자열, +는 앞선 패턴이 최소 한 번 이상 반복되는 문자열, \d는 숫자를 의미한다.
  // {n,m}는 앞 문자가 최소 n개부터 최대 m개까지 나오는 부분에 대응된다. 즉 숫자 1~5개까지를 이야기함.
  const pattern = /(\D+)(\d{1,5})/;
    console.log(pattern);
    
  // sort, 콜백함수를 통해 정렬된 문자열을 받아온다  
  return files.sort((a, b) => {
    // match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다.
    let [aHead, aNumber] = a.match(pattern).slice(1, 3);
    let [bHead, bNumber] = b.match(pattern).slice(1, 3);
    aHead = aHead.toLowerCase();
    bHead = bHead.toLowerCase();
    if (aHead === bHead && aNumber === bNumber) return 0;
    if (aHead === bHead) return aNumber - bNumber;
    if (aHead > bHead) return 1;
    else return -1;
  });
}
