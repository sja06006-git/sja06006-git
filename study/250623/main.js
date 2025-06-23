// document.write("<h1>Document Write First</h1>")
// alert("Hello, World!!!");
// console.log("자바스크립트는 객체 기반입니다.");
// console.log("데이터 타입 선언 없이 변수 생성 가능!");
// console.log("1 + 2 = ", 1 + 2); 
// document.write("<h1>Document Write Last</h1>");
// let name = prompt("당신의 이름은?");
// alert("안녕하세요, " + name + "님!");
// document.write("안녕하세요, " + name + "님!");
// // let은 재할당 가능 const는 상수 var은 호이스팅 문제로 사용 지양, scope(찾아 볼 필요없음 전역변수, 내부변수 범위 뜻함)와 hoisting 찾아보기

//calculator

// // if문 타입 비교 좀 더 찾아보기

// let currentYear = 2025;
// let birthYear = prompt("태어난 해를 입력하세요.");
// let age = currentYear - birthYear + 1;
// if ((typeof parseInt(birthYear)) !== 'number') {
//     alert("잘못된 입력입니다.");
// }
// else{
//     alert('당신의 나이는 ' + age + "세입니다.");
// }

// let name = "철수";
// let age = 20;
// let isStudent = true;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);

// // 할인계산기

// let price = 10000;
// let rate = 0.2;
// let discount = price * rate;
// let finalPrice = price - discount;

// console.log("할인된 가격은 " + finalPrice + "원 입니다.");

//템플릿 리터럴

// let name = "영희";
// console.log(`안녕하세요, ${name}님!`);

// let a = 10;
// console.log(a);
// a += 5; // 15
// console.log(a);
// a -= 3; // 12
// console.log(a);
// a *= 2; // 24
// console.log(a);
// a /= 4; // 6
// console.log(`최종값 : ${a}`);

// //이름과 나이를 입력받아 인삿말 출력하기

// let name = prompt("이름을 입력해주세요.");
// let age = prompt("나이를 입력해주세요.");

// alert(`반갑습니다, ${age}세 ${name}님!`)

// //두 수를 입력받아 사칙연산 결과를 각각 출력하기

// let a = prompt("첫번째 숫자를 입력하세요.");
// let b = prompt("두번째 숫자를 입력하세요.");
// let sum = parseFloat(a) + parseFloat(b);
// let minus = parseFloat(a) - parseFloat(b);
// let multiple = parseFloat(a) * parseFloat(b);
// let div = parseFloat(a) / parseFloat(b);
// alert(`결과: 합=${sum}, 차=${minus}, 곱=${multiple}, 나눗셈=${div}`)

// //== vs === 비교 실험하기

// let a = 5;
// let b = "5";
// let answer1 = (a == b);
// let answer2 = (a === b);


// alert(`==의 결과값: ${answer1} ===의 결과값 ${answer2}`)

// //3의 배수 검사기

// let num = prompt("숫자를 입력");
// if (num % 3 === 0) {
//     alert("3의 배수")
// }
// else {
//     alert("아님")
// }

// let stoploop = 0;
// while (stoploop == 0) {
//     let num = prompt("숫자를 입력");
//     switch (num % 3) {
//         case 0:
//             stoploop = 1;
//             alert("3의 배수");
//             break;
//         case 1:
//             stoploop = 1;
//             alert("아님");
//             break;
//         case 2:
//             stoploop = 1;
//             alert("아님");
//             break;
//         default:
//             alert("정수를 입력해주세요!")
//             break;
// }
// }

// let count;
// for (count=1; count<6; count++) {
//     let num = prompt("숫자를 입력");
//     switch (num % 3) {
//         case 0:
//             stoploop = 1;
//             alert(`3의 배수 count: ${count}/5`);
//             break;
//         case 1:
//             stoploop = 1;
//             alert("아님 count: ${count}/5");
//             break;
//         case 2:
//             stoploop = 1;
//             alert("아님 count: ${count}/5");
//             break;
//         default:
//             alert(`정수를 입력해주세요! count: ${count}/5`)
//             break;
// }
// }


// let a = 5;
// let b = 3;
// alert(a+b);

// let name = "홍길동";
// let age = 20;
// alert(`${name}님은 ${age}살 입니다.`);

// let side = 4;
// let area = side * side;
// alert(`area: ${area}`);

// let number = 7;
// if (number % 2 === 0) {
//     alert("짝수입니다.")
// }
// else {
//     alert("홀수입니다.")
// }

// let age = 16;
// if (age < 19) {
//     alert("미성년자입니다.");
// }
// else {
//     alert("성인입니다.")
// }

// let password = "1234";
// let input = "1234";
// if (password === input) {
//     alert("로그인 성공!")
// }
// else {
//     alert("로그인 실패!")
// }