https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    let arr = [0, 0]
    
    sizes.forEach( (el) => {
        let [w, h] = el.sort((a, b) => b - a);
        if(w > arr[0]) { arr[0] = w; }
        if(h > arr[1]) { arr[1] = h; }
    });
    
    return arr[0] * arr[1];
}
