let mine_array = [];
let mine_array_row = [];
let buttons = {};
let addMine = 0;
let num_mine = 0;
let num_mine_remain = 0;
let w, h;
let numNearby = 0;

let container = document.getElementById("container");

function getParams () {
    const params = new URLSearchParams(window.location.search);
    return {
        w: parseInt(params.get('mapWidth'), 10),
        h: parseInt(params.get('mapHeight'), 10),
        mines: parseInt(params.get('addMine'), 10),
    }
}

window.onload = function () {
    let params = getParams();
    let w =params.w;
    let h = params.h;
    // let mines = params.mines;

    if (isNaN(w) || isNaN(h)) {
        alert("맵 크기와 지뢰 개수를 정확히 입력해주세요!");
        return;
    }

    create_map(w, h);
}

function nearbyMine(x, y) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [ 0, -1],          [ 0, 1],
        [ 1, -1], [ 1, 0], [ 1, 1]
    ]

    let count = 0;

    for (let [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (ny >= 0 && ny < mine_array.length &&
            nx >= 0 && nx < mine_array[ny].length &&
            mine_array[ny][nx] === 1) {
                count++;
            }
    }
    return count;
}

//지뢰가 배치된 맵 생성
//prompt를 통해 맵 너비와 지뢰 갯수 받아오기
//0은 빈공간 1은 지뢰
function create_map (w, h) {
    //함수 테스트용
    // w = Number(prompt("너비를 입력하세요 (정수값)"));
    // h = Number(prompt("높이를 입력하세요 (정수값)"));

    container.innerHTML = "";

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${w}, 40px)`;
    container.style.rowGap = "0";
    container.style.columnGap = "0";

    buttons = {};
    for (let i=0; i<h; i++) {
        for (let j=0; j<w; j++) {
            let button = document.createElement("button");
            button.style.width = "40px";
            button.style.height = "40px";

            button.dataset.x = j;
            button.dataset.y = i;

            button.addEventListener("click", function () {
                const x = parseInt(this.dataset.x);
                const y = parseInt(this.dataset.y);

                if (this.textContent === "🚩") return;

                // 지뢰 클릭 시
                if (mine_array[y][x] === 1) {
                    this.textContent = "💣";
                    this.style.backgroundColor = "red";
                    alert("펑! 게임 오버");
                    location.href='get_test.html'
                } else {
                    const nearby = nearbyMine(x, y);
                    this.textContent = nearby > 0 ? nearby : "";
                    this.disabled = true;
                }
            });

            button.addEventListener("contextmenu", function (e) {
                e.preventDefault();
                if (this.disabled) return;

                if (this.textContent === "🚩") {
                    this.textContent = "";
                    num_mine_remain++;
                    console.log(`남은 갯수: ${num_mine_remain}`);
                } else if (this.textContent === "") {
                    this.textContent = "🚩";
                    num_mine_remain--;
                    console.log(`남은 갯수: ${num_mine_remain}`);
                }
            });

            container.appendChild(button);

            let index = `${j}${i}`;
            buttons[index] = button;

            if(Math.random() <= 0.8) {
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
    document.body.appendChild(container);
}


//map 위를 덮을 타일 생성 및 상호작용 구현 (상호작용은 별개로? 시작 및 재시작시에만 함수 두개 활용하고 상호작용은 별개로 구현할지도)
//좌클릭: 타일 열기/열린 타일 클릭시 표시갯수와 숫자 일치시 주변 타일 전부 열기 , 우클릭: 지뢰 표시/타일 위에 마우스 올리면 주변 타일 강조

//주변 타일 표시 더 진행해보기

// let x;
// let y;

// if (x === 0 && y === 0) {
//     // buttons[`${x}${y}`].style.backgroundColor = ""
// }
// else if (x === 0 && y === h-1) {
    
// }
// else if (x === w-1 && y === 0) {
    
// }
// else if (x === w-1 && y === h-1) {
    
// }
// else {
//     if (x > 0 && x < w-1 && y < 1) {

//     } //상단

//     else if (x > w-2 && y > 0 && y <h-1) {
        
//     }//우측

//     else if (x > 0 && x < w-1 && y >h-2) {
        
//     }//하단

//     else if (x < 1 && y > 0 && y <h-1) {
        
//     }//좌측

//     else {

//     }
// }