function printInvertedPyramid(a) {
    for (let i=a; i>0; i--) {
        console.log(" ".repeat(a-i)+"*".repeat((2*i)-1));
    }
}