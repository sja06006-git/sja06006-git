function greet(name: string): string {
    return `Hello, ${name}`;
}
console.log(greet("john"));

//타입 지정
let n: number = 1;
let b: boolean = true;
let s: string = "hello";
let o: object = {};

//타입 추론
let n1 = 1;
let b1 = true;
let s1 = "hello1";
let o1 = {};

//any
let a: any = 0;
a = "hello";
a = true;
a = {};

//undefined
let u:undefined = undefined;
// u = 1; //undefined에 지정 불가

let count = 10, message = "your count";
let result = `${message} is ${count}`;
console.log(result);