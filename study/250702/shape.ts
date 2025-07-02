class Person {
    name: string;
    age: number;
}

const jill : { name: string, age: number } = { name: "jill", age: 25};
const jane : { name: string, age: number } = { name: "jane", age: 22};

const Person1: Person = jill;
const Person2: Person = jane;

console.log(Person1, Person2);
console.log(Person1===Person2);