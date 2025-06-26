function printstar(a) {
    for (let i=1; i<a+1; i++) {
        console.log("*".repeat(i));
    }
}

function printrightstar(a) {
    for (let i=1; i<a+1; i++) {
        console.log(" ".repeat(a-i)+"*".repeat(i));
    }
}

function printPyramid(a) {
    for (let i=1; i<a+1; i++) {
        console.log(" ".repeat(a-i)+"*".repeat((2*i)-1));
    }
}