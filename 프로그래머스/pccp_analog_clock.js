// 시침 분침, 초침 시계
// 특정 시간동안 알람이 울린 횟수는?
// h1시 m1분 s1초 ~ h2시 m2분 s2초에 울리는 횟수 구하기

//시계 한바퀴를 거리로 변환
//시침 분침 초침의 움직이는 속도를 계산
//시간 동안 움직이는 거리를 한바퀴 거리로 나눈 나머지는 현재 위치
//시침: 한바퀴 => 12시간 = 720분 = 43200초
//분침: 한바퀴 => 60분 = 3600초
//초침: 한바퀴 => 60초
// 비율 = 시 : 분 : 초 = 720 : 60 : 1
// 한바퀴 거리를 3600이라고 가정
// 초침이 한바퀴 돌때 이동 거리 비 = 5 : 60 : 3600 = 1 : 12 : 720
// 분당 회전 각도 시침: 0.5, 분침: 6, 초침: 360
// 초당 회전 각도 시침: 0.5/60, 분침: 0.1, 초침: 6

function set_init(h1, m1, s1, h2, m2, s2) {
    //초기 바늘 위치
    const init_ang_h = (h1 % 12) * (0.5 / 60);
    const init_ang_m = m1 * 0.1;
    const init_ang_s = s1 * 6;
    //최종 바늘 위치
    const end_ang_h = (h2 % 12) * (0.5 / 60);
    const end_ang_m = m2 * 0.1;
    const end_ang_s = s2 * 6;

    return [init_ang_h, init_ang_m, init_ang_s, end_ang_h, end_ang_m, end_ang_s]
}

function solution(h1, m1, s1, h2, m2, s2) {
    var answer = -1;

    //초기위치 설정
    const [init_ang_h, init_ang_m, init_ang_s, end_ang_h, end_ang_m, end_ang_s] = set_init(h1, m1, s1, h2, m2, s2);
    console.log(init_ang_h, init_ang_m, init_ang_s, end_ang_h, end_ang_m, end_ang_s);

    //현재시간 기준 바늘 위치
    let ang_h = 0;
    let ang_m = 0;
    let ang_s = 0;

    return answer;
}