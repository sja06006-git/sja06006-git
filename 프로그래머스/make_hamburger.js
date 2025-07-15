// 상수는 햄버거를 포장
// 다른 직원이 재료 조리시 조리 순서대로 아래에서 위로
// 순서는 아래부터 빵-야채-고기-빵
// ex: [야채,빵,빵,야채,고기,빵,야채,고기,빵]
// 일때 index 2~5에서 1개 포장
// [야채,빵,야채,고기,빵]
// index 1~4에서 1개 포장 총합 2개 포장 가능
// 주어지는 배열 ingredient
// 1: 빵, 2: 야채, 3: 고기 => 포장되는 햄버거는 1, 2, 3, 1이 한 묶음

function solution(ingredient) {
    var answer = 0;
    let str = "";
    let reStr = "";

    for (let i=0; i<ingredient.length; i++) {
        str.join(ingredient[i]);
    }

    // 초기 시행일 때
    if (answer === 0) {
        // 만들 수 없으면
        if (!str.includes("1231")){
            answer = "상수가 포장할 수 있는 햄버거가 없습니다.";
        }
        // 만들 수 있으면
        else {
            if(str.indexOf("1231") !== 0) {
                str = str.slice(0, (str.indexOf("1231") - 1)) + str.slice((str.indexOf("1231") + 4), (str.length - 1))
            }
        }
    }
    // 2회차 이상일 때
    else {
        if (!str.includes("1231")){
            
        }
        else {
            if(str.indexOf("1231") !== 0) {
                str = str.slice(0, (str.indexOf("1231") - 1)) + str.slice((str.indexOf("1231") + 4), (str.length - 1))
            }
        }
    }
    return answer;
}