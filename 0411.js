https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
    let hash = {};

    for (let i = 1; i < words.length; i++) {
        if (words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0)) 
            return [(i % n) + 1, Math.floor(i / n) + 1];

        if (hash[words[i]]) return [(i % n) + 1, Math.floor(i / n) + 1];
        hash[words[i - 1]] = words[i - 1];
    }
    return [0, 0];
}
