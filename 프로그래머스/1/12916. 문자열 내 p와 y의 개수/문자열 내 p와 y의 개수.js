function solution(s){
    var answer = true;
    let numP = 0;
    let numY = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] === "p" || s[i] === "P") {
            numP++;
        }
        else if (s[i] === "y" || s[i] === "Y") {
            numY++;
        }
        
        if (numP === numY) {
            answer = true;
        }
        else {
            answer = false;
        }
    }
    
    return answer;
}