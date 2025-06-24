//7
console.log("7번 문제");
console.log("");

for(let i=1; i<11; i++) {
    console.log(`${i}`);
}

console.log("");
console.log("8번 문제");
console.log("");

for(let j=1; j<101; j++) {
    if (j % 5 === 0) {
        console.log(`${j}`);
    }
    else {
        continue;
    }
}

console.log("");
console.log("9번 문제");
console.log("");

let input = Number(prompt("숫자 입력"));
let k = 1;
1
while (k<(input + 1)) {
    console.log(`${k}`);
    k++
}

console.log("");
console.log("10번 문제");
console.log("");

console.log("구구단")
for (let l=2; l<10; l++) {
    for (let m=1; m<10; m++) {
        console.log(`${l} x ${m} = ${l * m}`)
    }
}