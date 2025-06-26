// //객체 예제
// const user = {
//     name: "철수",
//     age: 25,
//     greet: function () {
//         alert("안녕하세요!");
//     }
// }

// console.log(user.name);
// console.log(user.age); //`${}` 없어도 되는데 색깔 다름. why?
// user.greet();

// function Student (name, score, gender, grade) {
//     this.name = name;
//     this.score = score;
//     this.gender = gender;
//     this.grade = grade;

//     this.sayHi = function () {
//         alert(`안녕하세요 저는 ${this.name}입니다.`)
//     }
// }

// const student1 = new Student("철수", 20, "남자", 1);
// const student2 = new Student("영희", 21, "여자", 2);

// console.log(student1.name);
// console.log(student1.score);
// console.log(student2.name);
// student2.sayHi();

// const user = {
//     name: "홍길동",
//     age: 30,
//     email: "hong@example.com"
// }

// console.log(user.name);
// console.log(user.email);

// const book = {}

// console.log("객체 생성");
// for (let key in book) {
//     console.log(`key: ${key}, value: ${book[key]}`);
// }

// book.title = "책제목";
// book.author = "저자이름";
// book.year = 2025;

// console.log("요소 추가");
// for (let key in book) {
//     console.log(`key: ${key}, value: ${book[key]}`);
// }

// delete book.year;

// console.log("요소 삭제");
// for (let key in book) {
//     console.log(`key: ${key}, value: ${book[key]}`);
// }

// const product = {
//     id: 101,
//     name: "노트북",
//     price: 1200000
// }

// console.log(product["name"]);

// for (let key in product) {
//     console.log(`key: ${key}, value: ${product[key]}`);
// }

// const people = {
//     {name: ,age: },
//     {},
//     {}
// }

// const calculator = {
//     add: function (a, b) {
//         return a + b;
//     },
//     subtract: function (a, b) {
//         return a - b;
//     }
// }

// console.log(calculator.add(5, 3));
// console.log(calculator.subtract(10, 4));

// const now = new Date();
// console.log(now);
// console.log(now.getTime()); // 1970.1.1기준 ms
// console.log(now.getFullYear());
// console.log(now.getMonth() +1); //0에서 시작
// console.log(now.getDate());

//기념일 계산기

// const today = new Date();
// const birthday = new Date("1999-2-2");
// let diff = today.getTime() - birthday.getTime();
// // let days = diff / 1000 / 60 / 60 / 24;
// let days = Math.floor(diff / (1000 * 60 * 60 * 24)); //Math.floor로 소수점 아래 날리기

// alert(`${days}`)

// const now = new Date();
// const fromString = new Date("2024-12-25");
// const fromNumber = new Date(2024, 11 ,25);
// const fromTimestamp = new Date(1700000000000);

// const d = new Date();
// console.log(d.getFullYear());
// console.log(d.getMonth()+1);
// console.log(d.getDate());
// console.log(d.getDay());

// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

// const d = new Date();

// d.setFullYear(2026);
// d.setMonth(5);
// d.setDate(15);

// d.setHours(10);
// d.setMinutes(30);

// const d = new Date();
// d.setDate(d.getDate() + 7);
// d.setDate(d.getMonth() - 1);

// const date1 = new Date("2025-06-01");
// const date2 = new Date("2025-06-11");

// const diffInMs = date2 - date1;
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

// console.log(`${diffInDays}`);

// const d = new Date();

// const formatted = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
// console.log(formatted);

// const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

// const d = new Date();
// console.log(`오늘은 ${dayNames}`);

//오전 오후까지 해보기


//연습 문제1

const d = new Date();

// console.log(d.getFullYear()+"년"+(d.getMonth()+1)+"월"+d.getDate()+"일 "+d.getHours()+"시"+d.getMinutes()+"분"+d.getSeconds()+"초");

//연습 문제2

// const year = d.setFullYear(2025);
// const month = d.setMonth(12);
// const day = d.setDate(25);

// console.log(d.getFullYear()+"년"+(d.getMonth()+1)+"월"+d.getDate()+"일 ");

//연습 문제3

// console.log(d.getFullYear()+" / "+(d.getMonth()+1)+" / "+d.getDate());

//연습 문제4

// const answerInMs = d.getTime() + (100 * 24 * 60 * 60 * 1000);
// const answerInDays = Math.floor(answerInMs / (24 * 60 * 60 * 1000));
// const answerInMonth = Math.floor(answerInDays / 30);
// const answerInYear = Math.floor(answerInMonth / 12);

// console.log(`${answerInMs}`);
// console.log(`${answerInDays}`);
// console.log(`${answerInMonth}`);
// console.log(`${answerInYear}`);

// console.log((d.getFullYear()+answerInYear)+" / "+(d.getMonth()+answerInMonth+1)+" / "+(d.getDate()+answerInDays));

// const now = new Date();
// console.log();
// console.log();
// console.log();

// now.setDate(now.getDate()+100);


// const User = {

// }


// function Book (title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// const book1 = new Book ("책1", "저자1", 2025);
// const book2 = new Book ("책2", "저자2", 2026);
// const book3 = new Book ("책3", "저자3", 2027);

// const now = new Date();
// const thatDay = new Date("2024-11-11");

// const diff = now.getTime() - thatDay.getTime();
// const diffInDays = Math.floor(diff / (24 * 60 * 60 * 1000));

// console.log(`오늘은 ${diffInDays}째 되는 날 입니다.`)