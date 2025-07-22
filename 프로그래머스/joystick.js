// 조이스틱으로 알파벳 이름 완성하기
// 초기값은 전부 A
// 위: 다음 알파벳, 아래: 이전 알파벳, 왼: 커서 왼쪽, 오: 커서 오른쪽
// 조작 횟수 최소 값은?
// 1. 좌우 최소 조작 체크하기
// 2. 상하 조작 체크하기
//console.log("A".charCodeAt(0));
//console.log("Z".charCodeAt(0));
// console.log("A"-"Z");

function solution(name) {
    var answer = 0;
    let up = 0;
    let down = 0;
    let path = [];
    let count = [];
    let tempA = 0;

    // 상하조작 횟수 체크 위해 숫자 변환 후 작은 값을 answer +=
    for (let i=0; i<name.length; i++) {
        up = name[i].charCodeAt(0)-"A".charCodeAt(0);
        down = 1 + "Z".charCodeAt(0)-name[i].charCodeAt(0);

        if (up < down) {
            answer += up;
        }
        else {
            answer += down;
        }
    }

    // A 존재 여부에 따른 이동방향 결정
    if (!name.includes("A")) {
        answer += name.length - 1; // A가 존재하지 않으면 차례로 한번씩 이동
    }
    else {
        // A가 존재하면 A의 인덱스 확인 indexOf와 lastIndexOf를 둘 다 활용하여 양방향 비교 필요
        // 좌우 최대 조작 횟수는 name.length - 1

        // 1순위로 구현해 볼 로직
        // A가 아닌 값은 1개 요소 당 0하나 A값은 연속된 A의 개수로 표현되는 배열로 구현하기
        // A인 지점과 아닌 지점, 스킵 개수가 명확해짐

        for (let i=0; i<name.length; i++) {
            if (name[i] !== "A") {
                path.push(0)
            }
            else {
                tempA++;
                if (name[i + 1] !== "A") {
                    path.push(tempA);
                    tempA = 0;
                }
            }
        }
        console.log(path); // path 출력 확인

        // path를 통한 연산 구현하기
        // 0은 문자 하나, 0이외는 A의 개수임을 명확히 고려하기

        




        // 아래 로직은 2순위

        // // *** 1과 3 for문 하나로 합치기 ***

        // // 1. A인 구간과 아닌 구간을 0, 1 값으로 배열화
        // for (let i=0; i<name.length; i++) {
        //     if (name[i] === "A") {
        //         path.push(1);
        //     }
        //     else {
        //         path.push(0);
        //     }
        // }
        // // ABAAAAAB => 10111110
       
        // // 3.count를 갯수로 만들지 않고 path와 같은 길이를 가지는 배열로? (1:1로 대응 가능)
        // for (let i=0; i<path.length; i++) {
        //     if (i === 0) {
        //         count.push(temp)
        //     }
        //     else {
        //         if (path[i] !== path[i - 1]) {
        //             temp++;
        //             count.push(temp);
        //         }
        //         else {
        //             count.push(temp);
        //         }
        //     }
        // }
        // console.log(path);
        // console.log(count);


        // 아래 로직은 구현 식이 너무 복잡해짐 3순위

        // 2. A인 구간과 A가 아닌 구간의 연속된 개수를 배열화
        // !! 조건식 잘못 됐음 수정 필요
        // for (let i=0; i<name.length; i++) {
        //     if (name[i] === name[i+1]) {
        //         temp++;
        //     }
        //     else {
        //         count.push(temp);
        //         temp = 1;
        //     }
        // }
        // ABAAAAAB => 1151

        // BABBBBBA라면? => 어떻게 해도 횟수 동일
        // 우회해야 하는 지점은 연속된 A

        // count의 요소가 홀수개일때와 짝수개일때의 탐색 차이
        // 짝수개일때 => 그냥 진행
        // 홀수개일때 => 첫 인덱스와 마지막 인덱스 합치고 탐색 인덱스를 짝수개로 변경해 탐색 진행
        // 홀수개이고 A로 시작하면 인덱스를 줄이기 전 첫 인덱스 값과 마지막 인덱스 값 중 더 가까운 값을 답에 더해주기
        // 홀수개이고 A로 시작하지 않으면 인덱스를 줄이기 ...?

    }
    return answer;
}