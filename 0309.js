https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
    var count = 0;
    skill_trees.forEach((item) => {
        let str = '';
        for(let i = 0; i < item.length; i++) {
            if(skill.indexOf(item[i]) >= 0) {
                str += item[i];
            };
        }
        if(skill.indexOf(str) === 0) {
            count++;
        }
    })
    return count;
}
