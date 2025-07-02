let value2: unknown = 10;
value2 = "hello";
console.log(value2);

value2 = new Array();
//type guard 필요
if (value2 instanceof Array){
    value2.push(33);
    value2.push(22);
    console.log(value2);
    value2.shift(); //앞 빼기
    console.log(value2);
}

function printLength(value3: unknown) {
    if (typeof value3 === "string") {
        console.log(value3.length);
    }
}