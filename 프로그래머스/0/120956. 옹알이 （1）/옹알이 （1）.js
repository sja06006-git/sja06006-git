function solution(babbling) {
    var answer = 0;
    let aya = "aya";
    let ye = "ye";
    let woo = "woo";
    let ma = "ma";
    let isAya;
    let isYe;
    let isWoo;
    let isMa;
    let include ="";
            
    for (let i=0; i<babbling.length; i++) {
        isAya = babbling[i].includes(aya);
        isYe = babbling[i].includes(ye);
        isWoo = babbling[i].includes(woo);
        isMa = babbling[i].includes(ma);
        if (isAya === true) {
            include = include + "aya";
        }
        if (isYe === true) {
            include = include + "ye";
        }
        if (isWoo === true) {
            include = include + "woo";
        }
        if (isMa === true) {
            include = include + "ma";
        }
        
        if (babbling[i].length === include.length) {
            answer++;
        }
        
        include = "";
    }
    return answer;
}