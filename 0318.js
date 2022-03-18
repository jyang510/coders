

//내가 푼 코드
// 문제 자체는 쉬운데, 이걸 어떻게 해야 줄일 수 있을지 생각을 못해서 쓸데없이 코드가 길어졌다
// 아래 정답을 보면 a,b 값을 더한 값과 두 수의 차이(절대값)을 곱해준 후에, 2로 나누는 방식으로 모든 수를 합쳐줬다
// 쉽게 말하면 1부터 10까지 더한다고 했을때, 1+10 2+9 3+8 ... 5+6 이기 때문에 11(a+b) * 5((두 수의 차이 + 1) / 2)이다
// 예전에 수학 만화책에서 배웠던 것 같은데 이걸 왜 생각을 못했을까 ㅋㅋ
function solution(a, b) {
    let answer = 0;
    let tmp = 0;
    if (a === b) return a;
    if (a > b) {
        tmp = a;
        a = b;
        b = tmp;
    }
    for (let i = a; i <= b; i++) {
        answer += i;
    }
    return answer;
}

// 훨씬 깔끔한 정답
function solution(a, b){
    var result = 0

    return (a+b)*(Math.abs(b-a)+1)/2;
}
