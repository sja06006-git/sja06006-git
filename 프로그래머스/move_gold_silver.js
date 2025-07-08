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
// t와 w로 단위시간당 수송량 > 각 도시의 자원량
//


function solution(a, b, g, s, w, t) {
    var answer = -1;
    // 단위시간당 수송량 배열
    let unitW = [];
    // 단위수송량 배열 값 할당 //unitW초기화 할때 재활용
    for (let i=0; i<g.length; i++) {
        unitW[i] = w[i] / t[i];
        console.log(unitW[i]);
    }
    // 단위 수송량이 많은 인덱스부터 인덱스 숫자를 배열
    let fastest = [];
    let larger = unitW[0];
    let largerIndex = 0;
    // 이중for문 돌리기
    // 내부는 배열 전체를 돌며 가장 큰 값의 인덱스 찾기
    // 외부는 위 행위를 배열 길이만큼 반복하며 largerIndex를 배열에 순차적으로 삽입
    for (let i=0; i<g.length; i++) {
        for (let j=0; j<g.length; j++) {
            if (larger < unitW[j]) {
                larger = unitW[j]
                largerIndex = j;
            }
        } 
        fastest.push(largerIndex);
        unitW[largerIndex] = 0;
        larger = unitW[0];
        largerIndex = 0;
    }
    // 위 과정에서 값을 변형한 unitW배열 다시 초기화 해주기
    for (let i=0; i<g.length; i++) {
        unitW[i] = w[i] / t[i];
        console.log(unitW[i]);
    }
    // fastest의 0번 요소에 있는 값에 해당하는 index부터 순차적으로 보유한 금과 은의 양을 a, b에서 제거
    // fastest.length만큼 반복하나 도중 a,b 용량 만족시 if문으로 break
    // 꼭 동원되는 도시의 수를 required로 선언하여 몇개의 도시가 사용되는지 체크
    // 도시 수 확인 필요한지 더 생각해보기 // 금, 은을 나눠서 체크 필요?
    //! 반드시 나눠서 체크해야함 -> 금 보유 은 미보유/ 금 미보유 은보유 등의 케이스에서 required가 합산되어 불명확해짐
    // 금 보유량 체크하고 인덱스 기록
    let gRequired = 0;
    let gIndex = [];
    for (let i=0; i<fastest.length; i++) {
        if (g[fastest[i]]>0) {
            a -= g[fastest[i]];
            gRequired++;
            gIndex.push(fastest[i]);
        }
        if (a<1) {
            break;
        }
    }

    // 은 보유량 체크하고 인덱스 기록
    let sRequired = 0;
    let sIndex =[];
    for (let i=0; i<fastest.length; i++) {
        if (s[fastest[i]]>0) {
            b -= s[fastest[i]];
            sRequired++;
            sIndex.push(fastest[i]);
        }
        if (b<1) {
            break;
        }
    }

    // 앞쪽부터 소요 시간이 동일한지 확인 필요?
    // 사용될 도시에 대해 총 운송시간을 정리한 새로운 시간 배열?
    let gTime = [];
    
    
    //required 값 확인용 (추후 삭제)
    console.log(gRequired);
    console.log(sRequired);
    // 배열값 확인 출력용 (추후 삭제)
    for (let i=0; i<gIndex.length; i++) {
        console.log(gIndex[i]);
    }
    for (let i=0; i<sIndex.length; i++) {
        console.log(sIndex[i]);
    }
    for (let i=0; i<g.length; i++) {
        console.log(fastest[i]);
    }
    return answer;
}

solution(90, 500, [70,70,0], [0,0,500], [100,100,2], [4,8,1]);