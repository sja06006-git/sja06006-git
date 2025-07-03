function solution(a, b) {
    var answer = 0;
    let big;
    let small;
    if (a>b) {
        big = a;
        small = b;
        for (let i=small; i<big+1; i++) {
            answer += i;
        }
    }
    else if (a<b) {
        big = b;
        small = a;
        for (let i=small; i<big+1; i++) {
            answer += i;
        }
    }
    else {
        answer = a;
    }
    
    return answer;
}