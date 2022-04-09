// 오늘의집 코딩테스트 문제를 2~5시까지 풀었는데
// 1, 2번을 풀어서 그 코드를 적어둡니다

// 1번 문제
function solution(call) {
    // max치 문자열 다 넣어줄 배열 answer;
    let answer = [];
    // 몇 번 반복되었는지 확인하는 변수. 최소 2번이니까 2.
    let maxRepeat = 2;
    for (let i = 0; i < call.length; i++) {
        // 확인하는 문자열
        let checkChar = '';
        // 최종적으로 answer에 넣어줄 문자열
        let str = '';
        // 이러다가 break할듯
        for (let j = 0; j < call.length - i; j++) {
            // 문자열을 붙여주고
            checkChar += call[i + j];
            // 검증하기 위한 정규표현식
            let regExp = new RegExp(checkChar, 'gi');
            // 임시값에 몇 번이나 반복됐는지 입력하고
            let tmp = call.match(regExp).length;
            // 문자열이 조건을 충족한다면 maxRepeat을 바꾸고 answer에 넣는다
            if (tmp >= maxRepeat) { 
                maxRepeat = tmp;
                str = checkChar;
            } else {
            // 충족하지 못한다면 break; 해버린다
                break;
            }
        }
        answer.push([str, maxRepeat]);
    }
    // 반복문을 빠져나왔으니 answer을 돌면서 제거 
    let result = call;
    for (let k = 0; k < answer.legnth; k++) {
        //replace 활용해서 제거
        console.log(answer[k][0]);
        let regExp = new RegExp(answer[k][0], 'gi');
        console.log(regExp);
        result = result.replace(regExp, '');
        console.log(call);
    }
    return result;
}


// 2번 문제
function solution(path) {
    // 전체 시간 변수
    let beforeTime = 0;
    let time = 1;
    // 틀 방향 지정
    let turn = { ES: 'right', EN: 'left', SW: 'right', SE: 'left',
        WN: 'right', WS: 'left', NE: 'right', NW: 'left'};
    // 저장할 변수 answer
    let answer = [];
    for (let i = 0; i < path.length; i++) {
        while (path[i] === path[++i]) {
            time++;
        };
        if (time > 5) {
            beforeTime = time - 5;
            time = 5;
        }
        i--;
        // 방향 판별
        let check = path[i] + path[i + 1];
        let result = `Time ${beforeTime}: Go straight ${time * 100}m and turn ${turn[check]}`;
        beforeTime += time;
        time = 1;
        answer.push(result);
    }
    answer.pop();
    return answer;
}

// 3번 문제는 풀다가 못 풀어서 작성된 코드만 좀 적습니다
function solution(tstring, variables) {
    // tstring의 괄호 안에 있는 값들을 전부 다 answer배열에 저장하고 Set을 통해 간추린다
    let answer = [];
    for (let i = 0; i < tstring.length; i++) {
        let str = '';
        if (tstring[i - 1] === '{') {
            while (tstring[i] !== '}') {
                str += tstring[i];
                i++;
            }
            answer.push(str);
        }
    }
    let setAnswer = new Set(answer);
    // 변환을 성공할 때마다 요소를 제거하여 최종적으로 완료하면 반복문을 이탈한다
    let i = 0;
    
    // 반복문으로 variabels에 있는 것과 일치하는 게 있는지 본다
    // 1 일치하면? 값이 변수인지 문자열인지 확인한다
    // 1.1 변수면? 변수인지 
    while (setAnswer.length) {
        variables[j][0] === setAnswer[i];
    }
    // setAnswer의 길이만큼 반복
    for (let i = 0; i < setAnswer.length; i++) {
        // setAnswer[i]가 있는지를 판단
        for (let j = 0; j < variables.length; j++) {
            if (variables[j][0] === setAnswer[i]) {
                // 있으면 바꿔주고 넘어간다.
                // 변수일 때랑 변수가 아닐 때. 변수면 
                if (variables[j][1] === '{') {
                    
                }
                // let regExp = new RegExp(setAnswer[i], 'g');
                // tstring.replace()
            }
        }
    }
}
