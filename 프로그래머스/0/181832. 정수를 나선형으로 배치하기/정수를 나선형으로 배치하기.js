function solution(n) {
            let answer = [];
            for (let i=0; i<n; i++) {
                answer[i] = [];
                for (let j=0; j<n; j++) {
                    answer[i][j] = 0;
                    }
            }
            
            let value = 0;
            //좌->우 =0, 상->하 =1, 우->좌 =2 하->상 =3
            let side = 0;
            // _cycle은 for문 횟수 결정
            let v_cycle = 0;
            let h_cycle = 0;
            let half_cycle = 0;
            // _n은 for문 범위 결정
            let v_n = 1;
            let h_n = 0;
            v_cycle = n;
            h_cycle = n - 1;
            while(value <n*n) {

            if (side === 0) {
                //가로 좌->우 채우기
                for (let j=h_n; j<n-h_n; j++) {
                    value++;
                    answer[h_n][j] = value;
                }
                //작동후 side -> 1 // cycle--
                side = 1;
                h_cycle--;
            }
            else if (side === 1) {
                //세로 상->하 채우기
                for (let j=v_n; j<n-v_n; j++) {
                    value++;
                    answer[j][n-v_n] = value;
                }
                //작동후 side -> 2
                side = 2;
                v_cycle--;
            }
            else if (side === 2) {
                //가로 우->좌 채우기
                for (let j=n-1-h_n; j>h_n-1; j--) {
                    value++;
                    answer[n-1-h_n][j] = value;
                }
                //작동후 side -> 3
                side = 3;
                h_cycle--;
                h_n++;
            }
            else if (side === 3) {
                //세로 하->상 채우기
                for (let j=n-1-v_n; j>v_n-1; j--) {
                    value++;
                    answer[j][v_n-1] = value;
                }
                //작동후 side -> 0
                side = 0;
                v_cycle--;
                v_n++;
            }
            }

            for(let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                console.log(answer[i][j]);
            }
            }
        return answer;
        }