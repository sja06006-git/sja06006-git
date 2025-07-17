// 왼쪽 위부터 0, 0
// 세로좌표, 가로좌표
// 빈칸은. 파일은 #
// 최소 거리 드래그
// 드래그 시작지점: S(lux, luy)
// 드래그 종료지점: E(rdx, rdy)
// 드래그한 거리는 직선거리가 아닌 x차 + y차
// 바탕화면은 50*50 이하

function solution(wallpaper) {
    var answer = [];
    let sx = 50;
    let sy = 50;
    let ex = 0;
    let ey = -1;

    // 시작 지점
    for (let i=0; i<wallpaper.length; i++) {
        if (sy > wallpaper[i].indexOf('#') && wallpaper[i].indexOf('#') !== -1) {
            sy = wallpaper[i].indexOf('#');
        }
    }

    for (let i=0; i<wallpaper.length; i++) {
        if (wallpaper[i].includes("#")) {
            sx = i;
            break;
        }

    }

    // 종료 지점
    for (let i=0; i<wallpaper.length; i++) {
        if (ey -1 < wallpaper[i].lastIndexOf('#') && wallpaper[i].lastIndexOf('#') !== -1) {
            ey = (wallpaper[i].lastIndexOf('#') + 1);
        }
    }

    for (let i=wallpaper.length - 1; i>=0; i--) {
        if (wallpaper[i].includes("#")) {
            ex = i + 1;
            break;
        }

    }

    answer = [sx, sy, ex, ey];

    return answer;
}