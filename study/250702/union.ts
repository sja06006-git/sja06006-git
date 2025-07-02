let unionObj: {name: string} | {age: number} = {
    // name: "sue",
    age: 25
};

console.log(unionObj);

let result: string | number = 42;

type A = { name: string };
type B = { age: number };
type C = { name: number, age: number };

type D = A & B;
type E = A & C;
type F = B & C;

function logValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.length);
    }
    else {
        console.log(value*2);
    }
}

//유니온 + 타입가드



//in 연산자