function add(a, b) {
    return a + b;
}

function add2(a: number, b: number): number {
    return a+b;
} 

const greet: (name: string) => string = (name) => '`hello, ${name}';

// function log(message: string, user?: string) {
//     console.log(`${user ?? "system"}: ${message}`);
// }


function runMore(distance: number): number {
    return distance + 10;
}
for(let i=0; i<100; i+=10) {
    console.log(runMore(i));
}

function eat(calories: number) {
    console.log("I ate "+ calories + " calories");
    return calories;
}

function sleep(hours: number): void {
    console.log("I slept "+ hours + " hours");
}

let ate = eat(100);
console.log(ate);

let slept = sleep(10);
console.log(slept);

console.log(console.log(""));
console.log();