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
        if (ey - 1 < wallpaper[i].lastIndexOf('#') && wallpaper[i].lastIndexOf('#') !== -1) {
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