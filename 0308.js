https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
    var answer = [];
    let rLen = record.length;
    let nickMap = {};

    record.map(r => {
        let [action, uid, nickName] = r.split(' ');
        if(action !== 'Change') answer.push([uid, action]);
        if(action != 'Leave') nickMap[uid] = nickName;
    });

    answer = answer.map(a => {
        let actionStr = (a[1] === 'Enter')? "들어왔습니다." : "나갔습니다.";
        return `${nickMap[a[0]]}님이 ${actionStr}`;
    });

    return answer;
}
