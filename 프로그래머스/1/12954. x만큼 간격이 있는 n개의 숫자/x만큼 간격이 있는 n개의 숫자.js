function solution(x, n) {
    var answer = [];
    answer[0] = x
    let i=1;
    while(i<n) {
        answer[i] = answer[i-1] + x;
        i++;
    }
    return answer;
}