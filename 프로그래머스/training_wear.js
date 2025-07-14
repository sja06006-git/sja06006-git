// 점심시간에 체육복 도난
// 여벌 빌려주기
// 번호는 체격순
// 본인의 앞이나 뒷번호만 대여 가능
// 최대한 많은 학생이 수업을 듣도록
// 전체 학생 n
// 도난당한 번호 배열 lost[]
// 여벌 가진 배열 reserve[]
// return을 최댓값으로

// 1<n<31
// 0<lost.length<n+1
// 여벌학생이 도난시 대여 불가

function solution(n, lost, reserve) {
    var answer = 0;
    // let numLost = lost.length; //잃어버린 사람 수
    // let numReserve = reserve.length; //빌려줄 수 있는 사람 수
    // let duplication = 0; //여분이 있으나 도난당한 사람 수
    let check = [[]]; //lost의 앞뒤값 확인 후 기록을 위한 2차원 배열
    // reserve 배열에서 lost배열과 중복되는 값 제거하기
    for (let i=0; i<reserve.length; i++) {
        if (lost.find(num => {num === reserve[i]}) !== undefined) {
            reserve.filter((num) => {num !== reserve[i]});
        }
    }
    // lost배열을 돌며 reserve 배열의 본인 앞 뒤 번호가 있는지 확인
    for (let i=0; i<lost.length; i++) {
        // 본인 앞 번호 확인
        if (reserve.includes(lost[i] - 1)) {
            check[i][0] = lost[i] - 1;
        }
        // 본인 뒷 번호 확인
        if (reserve.includes(lost[i] + 1)) {
            check[i][1] = lost[i] + 1;
        }
    }
    // check 배열에서 check[i][1]과 check[i+1][0] 간의 중복 요소 확인
    

    return answer;
}