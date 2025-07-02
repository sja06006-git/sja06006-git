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
function log(message, user) {
    console.log("".concat(user !== null && user !== void 0 ? user : "system", ": ").concat(message));
}
log("hi");
