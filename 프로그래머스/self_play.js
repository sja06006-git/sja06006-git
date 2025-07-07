function solution(cards) {
    var answer = 0;
    let arr = cards.slice();

    // 최초에 card[i] = value1 확인 //while문 사용
    // card[value1-1] = value2로 이동해 값 확인
    // card[value(n-1)-1] = valuen까지 확인
    // if valuen === i 이면 종료 각 원소는 전부 그룹별 array에 삽입하고 arr.length를 점수로 가짐
    // arr.splice() 특정 인덱스 삭제
    // .sort((a, b) => b - a);내림차순 졍렬
    let boxes = 0;
    let del = []; //그룹 생성 후 지울 값들의 인덱스 번호 기록
    let index = []; //각 그룹의 값이 할당될 배열
    let indexNum = 0; //그룹 내 인덱스 번호
    let score = []; //각 그룹의 점수를 할당할 배열
    let next = 0; //이동할 상자 번호 부여
    let indexNext = 0; //다음 그룹의 시작 인덱스 보존을 위한 변수
    
    while (del.length !== arr.length) {
    // for (let i=0; i<10; i++) {

        if (del.length<arr.length) {
        
            console.log(indexNum);
            console.log(index[indexNum-1]);
            console.log(next);
            console.log(arr[next]);
            // splice()로 배열을 수정하며 배열길이가 달라지고 남아있는 배열값의 인덱스가 달라짐
            // -> 해당 번호의 상자로 이동이 불가능해지면서 오류 발생
            // how? :수정한 배열의 첫 요소값을 가져오기 -> splice한 배열 arr은 cards의 값을 재할당
            // -> 재할당한 arr에서 splice된 배열의 첫 요소값을 가지는 index 찾기
            // -> next에 해당 인덱스 값 할당하기
            // !!arr과 arrSplice로 분리 그래야 상단의 arr.length>0조건을 만족시키는 것이 가능!!

            index[indexNum] = arr[next];
            next = arr[next] - 1;
            indexNum++;
                
            if (arr[next] === index[0]) {
                console.log(arr);
                //그룹의 점수 기록
                score[boxes] = index.length;
                console.log(score[boxes]);
                //다음 그룹 번호 생성
                boxes++;
                console.log(arr);
                console.log(boxes);

                //arr에서 그룹을 생성한 값들을 제거
                //del을 수정하기 그룹이 바뀌어도 값 초기화 없이 유지하고 if를 통해 해당하는 인덱스 반환받아 splice하기
                
                for (let j=0; j<index.length; j++) {
                    del.push(index[j]-1);
                }
                console.log(del);
                del.sort((a, b) => b - a);
                console.log(del);
                console.log(arr);
                for (let j=0; j<del.length; j++) {
                    console.log(del[j]);
                    arr.splice(del[j],1);
                }

                indexNext = arr[0];
                arr = cards.slice();
                next = arr.indexOf(indexNext);
                console.log(next);
                
                console.log(arr);
                console.log(cards);
                console.log(del);

                //while 마치기 직전 변수 초기화 작업
                //index 초기화 필요 next, del은 불필요해보임
                index = [];
                indexNum = 0;
                // next = 0;
                // del = [];
            }
        }
        else {
            console.log("break");
            break;
        }
    }
    score.sort((a, b) => b - a);
    for(let i=0; i<score.length; i++) {
        console.log(score[i]);
    }
    console.log(boxes);
    //score[i] sort 진행 후 index 0, 1 값 곱하기
    // console.log();
    // boxes === 1 인 경우에는 0점
    answer = boxes === 1 ? 0 : (score[0]*score[1]);
    return answer;
}