// 정수배열 array에서 가장 자주 등장한 값 구하기
// arr의 길이는 1~99
// arr의 원소는 0~999

function solution(array) {
    var answer = 0;
    let temp = 0;
    let max = 0;
    let max_value = 0;
    array.sort((a, b) => a - b);
    for (let i=0; i<array.length-1; i++) {
        if ((i === (array.length - 2) && (array[i] !== array[i+1]))) {
            answer++;
        }
    }
    return answer;
}