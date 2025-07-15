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