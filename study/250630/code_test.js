function printStair(n) {
    for (let i=0; i<n; i++) {
        console.log(" ".repeat(i)+"*")
    }
}

function printDiamond(a) {
    for (let i=1; i<2*a; i++) {
        if (i < a) {
            console.log(" ".repeat(a-i+1)+"*".repeat((2*i)-1));
        }
        else {
            let j = (2 * a + 1) - (i - a + 1);
            console.log(" ".repeat(2 * a - j + 1)+"*".repeat(2*(j - a)-1));
        }
    }
}
