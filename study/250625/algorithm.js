//스택, 큐 예제


//stack

const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.pop());
console.log(stack[stack.length-1]);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);

const queue = [];
queue.push("A");
queue.push("B");
queue.push("C");


//queue

console.log(queue);
console.log(queue.shift());
console.log(queue);
console.log(queue[0]); //peek 첫 요소 출력