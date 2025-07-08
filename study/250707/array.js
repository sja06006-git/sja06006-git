// 고차 배열 메서드
const nums = [1, 2, 3, 4, 5];

// map
const squares = nums.map(n => n ** 2); // const squares = nums.map((n) => {n ** 2}); 이나 생략 가능

for (const val of squares) {
    console.log(`val => ${val}`);
}
//정석 for문이 비교하기에 더 좋음
for (let i=0; i<nums.length; i++) {
    console.log (`nums[${i}] => ${nums[i]}, squares[${i}] => ${squares[i]}`);
}

// filter 
const evens = nums.filter((n) => n % 2 === 0);

for (const val of evens) {
    console.log(`val => ${val}`);
}

//reduce
// const sum = nums.reduce((acc, cur) => acc + cur, 0); 축약되어 있으나 아래처럼 동작함
const sum = nums.reduce((acc, cur) => {
    acc += cur;
    console.log(`acc => ${acc}, cur => ${cur}`);
    return acc;
});
console.log(`sum => ${sum}`);

// find
const found = nums.find((n) => n > 2);
console.log(`found => ${found}`);

// some
const hasNagative = nums.some((n) => n < 2);
console.log(hasNagative);

// every
const allPositive = nums.every((n) => n > 0);
console.log(allPositive);

// flat
// const nested = [1, 2, 3];
// const duplicated = nested.flatMap(n => [n, n]);
// 위 과정에서 [[1, 2, 3], [1, 2, 3]]이 됨
const nested = [1, 2, [3, 4, [5, 6]]];
const duplicated = nested.flatMap(n => [n, n]);

for (let nest of duplicated) {
    console.log(`nest => ${nest}`);
}