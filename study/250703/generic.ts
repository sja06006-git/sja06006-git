//타입을 일반화 -> 코드 재사용성 및 타입 안정성
//함수 작성시 타입 fix 없음, 호출시점에 타입 지정
//T는 제네릭함수 선언시 Type을 뜻함
function identity<T>(value: T): T {
    return value;
}

let output1 = identity<string>("hello");
console.log(output1);

let output2 = identity<number>(10);
console.log(output2);

//구현시
let output;

//K = key, V = value, etc....

function getValue<K extends string, V> (obj: Record<K, V> , key: K): V {
    return obj[key];
}

let object = {name: "john", age: 20}

let nameresult = getValue(object, "name");
let ageresult = getValue(object, "age");

console.log(nameresult);
console.log(ageresult);