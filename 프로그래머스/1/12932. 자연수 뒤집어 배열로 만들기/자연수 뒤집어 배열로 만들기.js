function solution(n) {
    var answer = [];
    let letter = String(n)
    for (let i=0; i<letter.length; i++) {
        answer[i] = parseInt(letter[letter.length-1-i]);
    }
    return answer;
}