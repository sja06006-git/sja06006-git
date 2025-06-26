function solution(n) {
    let sum = 0;
    for (let i=1; i<(n+1); i++) {
        if (n % i === 0) {
            sum += i;
        }
        else {
            continue;
        }
    }
    var answer = sum;
    return answer;
}