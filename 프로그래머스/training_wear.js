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

// !!! 문제 조건에 배열들이 정렬되어 있다는 보장이 없었음.
// 순서가 중요한 경우 배열을 반드시 정렬해주기

function solution(n, lost, reserve) {
    var answer = 0;
    let stupid = [];
    let safe = [];
    // reserve 배열과 lost배열에서 중복되는 값 제거하기

    lost.forEach(element => {
        if (reserve.includes(element)) {
            stupid.push(element);
            reserve = reserve.filter((num) => {return num !== element});
        }
    });
    lost = lost.filter(num => !stupid.includes(num));
    lost = lost.sort((a, b) => a - b);

    // lost배열을 돌며 reserve 배열의 본인 앞 뒤 번호가 있는지 확인
    for (let i=0; i<lost.length; i++) {
        // 본인 앞 번호 확인
        if (reserve.includes(lost[i] - 1)) {
            safe.push(lost[i]);
            reserve = reserve.filter(num => num !== (lost[i] - 1));
        }
        // 본인 뒷 번호 확인
        else if (reserve.includes(lost[i] + 1)) {
            safe.push(lost[i]);
            reserve = reserve.filter(num => num !== (lost[i] + 1))
        }
    }

    answer = n - (lost.filter(num => !safe.includes(num)).length)
    
    return answer;
}