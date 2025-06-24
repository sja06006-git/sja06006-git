console.log("구구단 출력");
for (let i=2; i<10; i++) {
    console.log(`${i}단`);
    for (let j=1; j<10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

console.log("구구단 역출력");
for (let i=9; i>1; i--) {
    console.log(`${i}단`);
    for (let j=9; j>0; j--) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

console.log("홀수단 출력");
for (let i=1; i<10; i+=2) {
    console.log(`${i}단`);
    for (let j=1; j<10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

console.log("짝수단 출력");
for (let i=2; i<10; i+=2) {
    console.log(`${i}단`);
    for (let j=1; j<10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// console.log("구구단 한줄 출력");
// for (let i=2; i<10; i++) {
//     console.log(`${i}단`);
//     for (let j=1; j<10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }