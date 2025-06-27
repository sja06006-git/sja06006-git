let mine_array = [];
let mine_array_row = [];
let num_mine = 0;
let num_mine_remain = 0;
let w, h;

//지뢰가 배치된 맵 생성
//prompt를 통해 맵 너비와 지뢰 갯수 받아오기
//0은 빈공간 1은 지뢰]
// *** 주의 *** 2차원 배열과 유사하게 구현되나 실제로는 1차원 배열, 호출시에도 w*h 길이의 1차원 array로 생성됨, 호출 메서드도 1차원으로
// 2차원 index -> 1차원 index 변환 필요!
function create_map () {
    w = Number(prompt("너비를 입력하세요 (정수값)"));
    h = Number(prompt("높이를 입력하세요 (정수값)"));
    for (let i=0; i<h; i++) {
        for (let j=0; j<w; j++) {
            if(Math.random() <= 0.5) {
                mine_array_row.push(0);
            }
            else {
                mine_array_row.push(1);
                num_mine++;
            }
        }
        console.log(Array.isArray(mine_array_row));
        mine_array.push(mine_array_row);
        console.log(`${num_mine}`)
        console.log("row: " + mine_array_row);
        console.log("total" + mine_array);
        mine_array_row = [];
    }
    num_mine_remain = num_mine;

    console.log(Array.isArray(mine_array));
    // for (let k=0; k<(w*h); k++) {
    //     console.log(`${mine_array[k]}`);
    // }
}


//map 위를 덮을 타일 생성 및 상호작용 구현 (상호작용은 별개로? 시작 및 재시작시에만 함수 두개 활용하고 상호작용은 별개로 구현할지도)
//좌클릭: 타일 열기/열린 타일 클릭시 표시갯수와 숫자 일치시 주변 타일 전부 열기 , 우클릭: 지뢰 표시/타일 위에 마우스 올리면 주변 타일 강조
function reset_tile () {

}