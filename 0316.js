https://programmers.co.kr/learn/courses/30/lessons/12899

//말이 124인거지 사실상 3진수랑 다를 게 없는 것 같음
//그러면 3진수로 바뀐 값에 3만 4로 바꿔주면 되는 거 아닐까 해서 진수 변환하는
//함수인 toString()함수를 사용해보기로 했다.
function solution(n) {
    let answer = n.toString(3);
    //이제 3인 부분만 4로 바꿔주면 된다. 이 때 정규표현식을 통해 바꾸고 싶어서
    // 조금 뒤져보니, replace와 /(바꿀문자)/gi 를 하는 식으로 짰다
    let change = /3/gi;
    answer.replace(change, 4);
    return answer;
}

//이론상으론 맞는데, 3으로 나눠떨어질 때마다 제대로 맞지 않는다. 
//3진수는 012, 124나라는 124인데, toString을 쓰면 시작은 맞는데 3의 경우, 10이 되어버려서 124나라에 없는 0이란 값이 나오는데다가 자릿수도 맞지 않는 불상사가 일어남
//심지어 효율성 테스트 성공도 못했다. toString으로 진수 변환하는 게 효율이 좋진 않은가보다

//그래서 toString으로 하지 않고 반복문으로 3으로 계속 나누며
//얻은 나머지값에 따라 문자열을 붙여주며 최종적으로 더해진 문자열을 리턴하는 
//방식으로 바꿨다.
function solution(n) {
    let answer = '';
    //4, 1, 2인 이유는 3으로 나눈 경우 나머지가 0, 1, 2임에 따라 4, 1, 2가 나와야 하기 때문이다
    const arr = ['4', '1', '2'];
    while(n > 0) {
        answer = arr[n % 3] + answer;
        n = Math.floor((n - 1) / 3);
    }
    return answer;
}
