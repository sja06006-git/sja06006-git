let literObj: "tom" | "linda" | "jeff" | "sue";
literObj = "tom";

type literalObj = "tom" | "linda" | "jeff" | "sue";
let literalName: literalObj = "tom";

type Direction = "left" | "right" | "up" | "down";

let move: Direction = "left";

console.log(move);

type ResponseCode = 200 | 400 | 404 | 600;

function handleResponse(code: ResponseCode) {
  console.log();  
}