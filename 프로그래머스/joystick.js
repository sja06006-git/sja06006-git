// 조이스틱으로 알파벳 이름 완성하기
// 초기값은 전부 A
// 위: 다음 알파벳, 아래: 이전 알파벳, 왼: 커서 왼쪽, 오: 커서 오른쪽
// 조작 횟수 최소 값은?
// 1. 좌우 최소 조작 체크하기
// 2. 상하 조작 체크하기
console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));
// console.log("A"-"Z");

function solution(name) {
    var answer = 0;
    let up = [];
    let down = [];
    // 상하조작 횟수 체크 위해 숫자 변환
    for (let i=0; i<name.length; i++) {
        up.push(name[i].charCodeAt(0)-"A".charCodeAt(0));
        down.push(1+"Z".charCodeAt(0)-name[i].charCodeAt(0));
    }
    if (!name.includes("A")) {

    }
    else {

    }
    return answer;
}