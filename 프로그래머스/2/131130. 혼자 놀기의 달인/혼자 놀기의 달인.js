function solution(cards) {
    var answer = 0;
    let arr = cards.slice();
    
    let boxes = 0;
    let del = []; //그룹 생성 후 지울 값들의 인덱스 번호 기록
    let index = []; //각 그룹의 값이 할당될 배열
    let indexNum = 0; //그룹 내 인덱스 번호
    let score = []; //각 그룹의 점수를 할당할 배열
    let next = 0; //이동할 상자 번호 부여
    let indexNext = 0; //다음 그룹의 시작 인덱스 보존을 위한 변수
    
    while (del.length !== arr.length) {

        if (del.length<arr.length) {

            index[indexNum] = arr[next];
            next = arr[next] - 1;
            indexNum++;
                
            if (arr[next] === index[0]) {
                score[boxes] = index.length;
                console.log(score[boxes]);
                boxes++;
                
                for (let j=0; j<index.length; j++) {
                    del.push(index[j]-1);
                }
                del.sort((a, b) => b - a);
                for (let j=0; j<del.length; j++) {
                    console.log(del[j]);
                    arr.splice(del[j],1);
                }

                indexNext = arr[0];
                arr = cards.slice();
                next = arr.indexOf(indexNext);
                
                index = [];
                indexNum = 0;
            }
        }
        else {
            console.log("break");
            break;
        }
    }
    score.sort((a, b) => b - a);
    answer = boxes === 1 ? 0 : (score[0]*score[1]);
    return answer;
}