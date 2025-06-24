let age = Number(prompt("나이를 입력하세요"));

if (age<19) {
    alert("미성년자입니다.");
}
else {
    alert("성인입니다.");
}

let sum = 0;

for (let i=1; i<101; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
    else {
        continue;
    }
}

alert(`${sum}`);

let input = "";

while(input !== "exit") {
    input = prompt("입력하세요");
    alert(`${input}`);
}