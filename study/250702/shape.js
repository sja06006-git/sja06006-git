var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var jill = { name: "jill", age: 25 };
var jane = { name: "jane", age: 22 };
var Person1 = jill;
var Person2 = jane;
console.log(Person1, Person2);
console.log(Person1 === Person2);
