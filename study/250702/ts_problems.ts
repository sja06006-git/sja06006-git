//1
let nameP: string = "alice";

//2
let ageP: number = 21;
let isStudent: boolean = true;

//3
function addP(a:number, b:number): number{
    return a + b;
}

//4
let scoresP = new Array(); //이 방식 사용 시 타입이 any로 지정되니 사용 지양하기
scoresP.push(80);
scoresP.push(90);
scoresP.push(100);

//답안 방식 (보편적, 표준적)
let scoresA: number[] = [80, 90, 100];
//제네릭 형태로 표현 시
let scoreG: Array<number> = [80, 90, 100];

//5
let personP: {name: string, age: number} = {
    name: "alice", age: 21
}

//6
let id: string | number = "user123";