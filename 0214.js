https://programmers.co.kr/learn/courses/30/lessons/42587

// for문으로 돌면서 확인하는데, 만약 큰 게 있다면 뒤로 가게 하면 될 것 같다
// ...라고 생각했는데, 하다보니 while문으로 배열의 길이 조건만 거는 게 더 편할 것 같다

//큐나 스택 방식에서 사용하기 좋은 메소드로는 shift()가 있다.
//shift() => 배열의 맨 앞 요소를 빼서 리턴한다
//some 메소드는 배열 안의 어떤 요소든 이 함수를 통과할 수 있는지 유무를 판단해준다

//location으로 받은 요소가 자꾸 움직이기 때문에, location을 while문이 한 번 작동할 때마다 바꿔줘야 한다
//매개변수를 바꿀 수는 없으니, 받아와서 새로운 변수로 지정해줌
function solution(priorities, location) {
    let target = location;
    let count = 0;
    while (priorities.length) {
        let important = priorities.shift();
        if (priorities.some((el) => {
            return el > important
        })) {
            priorities.push(important);
        } else {
            count++;
            if (target === 0) {
                return count;
            }
        }
        if (target === 0) {
            target = priorities.length - 1;
        } else {
            target--;
        }
    }
}
