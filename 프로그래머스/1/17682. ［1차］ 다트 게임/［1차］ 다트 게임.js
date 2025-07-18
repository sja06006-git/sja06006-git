function cal(char, current, prev) {
    switch (char) {
        case "S":
            current = current ** 1;
            break;

        case "D":
            current = current ** 2;
            break;

        case "T":
            current = current ** 3;
            break;

        case "*":
            current *= 2;
            prev *= 2;
            break;

        case "#":
            current *= -1;
            break;
    
        default:
            break;
    }
    return [current, prev];
}


function solution(dartResult) {
    var answer = 0;
    let arr = [];
    let current = 0;
    let prev = 0;
    let chance = 0;

    for (let i=0; i<dartResult.length; i++) {
        if (!isNaN(Number(dartResult[i]))) {
            chance++;
            answer += prev;
            prev = current;
            current = 0;
            if (dartResult[i] === "1" && dartResult[i+1] === "0") {
                current = 10;
                i++;
            }
            else {
                current = Number(dartResult[i]);
            }
        }
        else {
            arr = cal(dartResult[i], current, prev);
            current = arr[0]
            prev = arr[1]
        }
    }

    answer = answer + current + prev;
    return answer;
}