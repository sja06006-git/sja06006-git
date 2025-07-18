// 1~45까지의 숫자 중 6개 뽑기
// 1등: 6개 ,2등: 5개 ,3등: 4개 ,4등: 3개 ,5등: 2개 ,6등: 1이하
// 6개 중 알아볼 수 없는 숫자는 0으로 표기
// 먼저 win_nums와 lottos 비교로 고정 정답 구하기
// 이후 0의 갯수에 대해 최고 최저치 찾기

function solution(lottos, win_nums) {
    var answer = [];
    let fixed = 0;
    let zeros = 0;
    let key = 0;

    for (let i=0; i<win_nums.length; i++) {
        if (lottos.includes(win_nums[i])) {
            fixed++;
        }

        if (lottos[i] === 0) {
            zeros++;
        }
    }

    for (let i=0; i<2; i++) {
        if (i === 0) {
            key = fixed + zeros;
        }
        else {
            key = fixed;
        }

        switch (key) {
        case 6:
            answer.push(1);
            break;

        case 5:
            answer.push(2);
            break;

        case 4:
            answer.push(3);
            break;

        case 3:
            answer.push(4);
            break;

        case 2:
            answer.push(5);
            break;

        default:
            answer.push(6);
            break;
        }
    }
    return answer;
}