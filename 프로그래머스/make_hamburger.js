// 상수는 햄버거를 포장
// 다른 직원이 재료 조리시 조리 순서대로 아래에서 위로
// 순서는 아래부터 빵-야채-고기-빵
// ex: [야채,빵,빵,야채,고기,빵,야채,고기,빵]
// 일때 index 2~5에서 1개 포장
// [야채,빵,야채,고기,빵]
// index 1~4에서 1개 포장 총합 2개 포장 가능
// 주어지는 배열 ingredient
// 1: 빵, 2: 야채, 3: 고기 => 포장되는 햄버거는 1, 2, 3, 1이 한 묶음


//수정해볼 코드
//스택 활용하여 수정해보기

function solution(ingredient) {
    var answer = 0;
    let arr = [];
    
    for (let i=0; i<ingredient.length; i++) {
        arr.push(ingredient[i]);
        if (arr[arr.length-4] === 1 && arr[arr.length-3] === 2 && arr[arr.length-2] === 3 && arr[arr.length-1] === 1) {
            arr.pop();
            arr.pop();
            arr.pop();
            arr.pop();
            answer++;
        }
    }
    
    return answer;
}




// 얘도 n^2

// function solution(ingredient) {
//     var answer = 0;
//     let str = "";
    
//     for (let i=0; i<ingredient.length; i++) {
//         str += ingredient[i];
//         str.endsWith("1231");
//         if (str.endsWith("1231") === true) {
//             str= str.slice(0, -4);
//             answer++;
//         }
//     }
    
//     return answer;
// }



// // 1차로 작성한 코드
// // 동작은 하지만 시간 복잡도가 O(n^2)으로 1 ≤ ingredient의 길이 ≤ 1,000,000인 배열범위에서 지나치게 커지는 경우가 발생함
// // 공간복잡도도 활용 필요, 동적 할당 범위? 동적 개입법
function solution(ingredient) {
    var answer = 0;
    let str = "";

    str = ingredient.join('');
    
    // 조립할 수 없을 때 까지 반복 (1회는 반드시 시행)
    do {
        // 초기 시행일 때
        if (str.includes("1231") === true){
            if(str.indexOf("1231") !== 0) {
                str = str.slice(0, str.indexOf("1231")) + str.slice((str.indexOf("1231") + 4), str.length);
                answer++;
            }
        }
    }while(str.includes("1231"))
    
    return answer;
}