// 다트 게임의 기회는 3번
// 기회 당 점수는 0~10점
// 싱글, 더블, 트리플 영역은 들어갈시 점수의 n승
// 싱글, 더블, 트리플은 점수마다 하나 존재 
// *스타상 당첨 시 해당과 이전 회차 점수는 두배
// #아차상 당첨 시 해당 점수를 마이너스로 적용
// 스타상과 아차상은 중첩 가능
// 스타와 아차는 점수마다 둘 중 하나 or 존재 x

// 현재 문자열에 대한 연산 로직
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