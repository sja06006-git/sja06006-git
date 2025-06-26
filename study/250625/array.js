// const numbers = [1, 2, 3, 4, 5];
// console.log(`${numbers[0]}`);
// console.log(`${numbers[1]}`);
// console.log(`${numbers[2]}`);
// console.log(`${numbers[3]}`);
// console.log(`${numbers[4]}`);
// // array index는 0에서 시작
// console.log(`${numbers[5]}`);
// //undefined 반환

// let test_array = [];
// test_array[7] = 7;
// for (let i=0; i<10; i++) {
//     console.log(`${test_array[i]}`)
// }
// //7 제외 undefined

// let fruits = ["사과", "바나나", "딸기"];
// console.log(fruits[0]);
// console.log(fruits.length);

// fruits.push("포도");
// console.log(fruits.length);

// fruits[fruits.length] = "키위";
// console.log(fruits.length);

// fruits[5] = "레몬"
// console.log(fruits.length);

// console.log(fruits);

// let items = ["여권", "칫솔", "수건"];

// items.push("충전기");
// items.splice(1, 1, "세면도구");

// console.log(items);

// // alert("여행 준비물 목록: " + items.join(", "));

// console.log(items.pop());
// console.log(items);


let animals = ["강아지", "고양이", "토끼"];
animals.push("사자");

for (let i=0; i<animals.length; i++) {
    console.log(animals[i]);
}

for (let animal of animals) {
    console.log(animal);
}

animals.forEach(function (animal) {
    console.log(animal);
})

// do-while 예제
let i=0;
do {
    console.log(i);
    i++
} while (i < 5);