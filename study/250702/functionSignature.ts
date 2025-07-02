// type Run = (miles: number) => boolean;
// let runner: Run = function (miles: number): boolean {
//     if (miles > 10) {
//         return true;
//     }
//     return false;
// }

// console.log(runner(9));
// console.log(runner(11));

// const runner1: (miles: number) => boolean = function (miles: number): boolean {
//     if (miles > 10) {
//         return true;
//     }
//     return false;
// }

// console.log(runner1(9));
// console.log(runner1(11));

function log(message: string, user?: string) {
    console.log(`${user ?? "system"}: ${message}`); // ??는 값이 없을때 (null, undefined 등...) 뒤의 값을 기본값으로
}

log("hi");