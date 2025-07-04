function solution(n, words) {
    var answer = [];
    let count = 0;
    let log = [];
    for (let i=0; i<words.length; i++) {
        log[i] = words[i];
        
        if (i > 0) {
            if (words[i-1].charAt(words[i-1].length-1) !== words[i].charAt(0)) {
                count = i+1;
                break;
            }
        }
        
        if (log.indexOf(log[i]) !== log.length-1) {
            count = i+1;
            break;
        }
    }
    console.log(count);
    let who = count % n;
    if (who === 0) {
        answer = [n, Math.ceil(count / n)];
    }
    else {
        answer = [(who), Math.ceil(count / n)];
    }

    if (answer[1] === 0) {
        answer = [0, 0];
    }
    console.log(count);
    console.log(answer);
    return answer;
}