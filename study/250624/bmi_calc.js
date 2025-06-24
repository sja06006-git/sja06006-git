let bmi = 0;
let h = 0;
let w = 0;

function bmif(w, h) {
    bmi = w / (h* h);
}

h = prompt("키입력");
w = prompt("무게입력");

bmif(w, h);
alert(`${bmi}`);