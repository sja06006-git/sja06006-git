type Points = 20 | 30 | 40 | 50;
let score: Points = 20;
let score2: 20 | 30 | 40 | 50 = 20;

console.log(score);

// @ts-ignore
// @ts-nocheck
// prettier-ignore
type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string;
};


type Type1 = number;
type Type2 = string;
type Type3 = boolean;
type Type4 = {};
type Type5 = {name: string} | {age: number};
type Type6 = {name: string} & {age: number};
type Type7 = Type5 & Type6;