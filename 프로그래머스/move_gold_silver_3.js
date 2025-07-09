// 하나 이상의 도시 = i>0
// 도시 건설 = 금: a, 은: b
// 금, 은의 양은 배열로
// -> i번째 도시 = g[i] s[i]
// i번 트럭은 i도시 <-> 공사장, 시간은 t[i] 용량은 w[i]
// 금 은 동시 운반 가능
// 경로, 연료 제한은 없음

// 매개변수
// 정수 a b 배열 g s w t

// 최적운행시 금 a 은 b를 운반하는 최단시간은?

// 제한사항
// 0 ≤ a, b ≤ 109
// 1 ≤ g의 길이 = s의 길이 = w의 길이 = t의 길이 = 도시 개수 ≤ 105
// 0 ≤ g[i], s[i] ≤ 109
// 1 ≤ w[i] ≤ 102
// 1 ≤ t[i] ≤ 105
// a ≤ g의 모든 수의 합
// b ≤ s의 모든 수의 합


// 우선순위 정하기
// 총 소요 시간을 증가시켜가며 조건을 만족하는 값 찾기
// t_total 변수를 설정하고 해당 시간에 i번째 도시가 얼마나 이송 가능한지 확인하기


function solution(a, b, g, s, w, t) {
    var answer = -1;
    // frequency는 주어진 시간에 i번 도시의 운송 가능 횟수를 기록하는 배열
    let frequency = [];
    // count는 frequency에 들어갈 값의 임시 저장용 변수
    let count = 0;
    // 금의 누적 이송량 확인을 위한 배열
    let g_total = [];
    // 배열 합계
    let total_g = 0;
    // 은의 누적 이송량 확인을 위한 배열
    let s_total = [];
    // 배열 합계
    let total_s = 0;
    // t_total은 운송에 소요할 총 시간
    let t_total = 1;
    // 모든 input value가 정수이므로 t_total도 정수범위에서 증가시키기
    // while로 조건을 만족할 때까지 반복
    while (true) {
        // frequency 배열값 생성
        for (let i=0; i<t.length; i++) {
            count = Math.floor(t_total / (2 * t[i]));
            if (t_total % (2 * t[i]) >= t[i]) {
                count++;
            }
            frequency[i] = count;
            count = 0;
        }
        // g_total의 배열값 생성
        for (let i=0; i<t.length; i++) {
            if (g[i] > 0) {
                g_total[i] = frequency[i] * w[i];
            }
        }
        // s_total의 배열값 생성
        for (let i=0; i<t.length; i++) {
            if (s[i] > 0) {
                s_total[i] = frequency[i] * w[i];
            }
        }
        
        // g_total 요소 모두 더하기
        for (let i=0; i<t.length; i++) {
            total_g += g_total[i];
        }
        // s_total 요소 모두 더하기
        for (let i=0; i<t.length; i++) {
            total_s += s_total[i];
        }

        // while문의 break 요건 체크하기
        if (total_g > a && total_s > b) {
            break;
        }
        t_total++;
    }
    
    
    // 배열값 확인 출력용 (추후 삭제)
    
    // for (let i=0; i<gIndex.length; i++) {
    //     console.log();
    // }
    // for (let i=0; i<sIndex.length; i++) {
    //     console.log();
    // }
    // for (let i=0; i<g.length; i++) {
    //     console.log();
    // }
    return answer;
}

solution(90, 500, [70,70,0], [0,0,500], [100,100,2], [4,8,1]);