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