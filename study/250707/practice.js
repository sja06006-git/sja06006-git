// const set = new Set([1, 2, 2, 3, 4, 5, 5]);

// console.log(set);
// for (const value of set) {
//     value += 5;
// }
// console.log(set);

// 1~5의 숫자가 포함된 배열 [1,2,2,3,4,5,5]
const arr = ([1, 2, 2, 3, 4, 5, 5]);
//중복을 제거
const set = new Set(arr);
// 모든 숫자에 5를
let i = 0;
for (let num of set) {
    console.log(Number(num) + 5);
}
//total에 중복 제거 합 //map 생성
const map = new Map();
map.set("total", i);

console.log(map.get("total"));

// 2번
const numbers = [3, 4, 7, 8, 10, 13];
const evens = numbers.filter((num) => num % 2 === 0);
const s = evens.map((num) => num * num);
const sum = s.reduce((acc,cur) => acc + cur, 0);
console.log(sum);

// 3번
function fetchDate() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("data ok");
        },2000)
    })
}

async function loadData() {
    const data = await fetchDate();
    console.log(data);
}

loadData();