function calculate() {
    const kor = parseFloat(document.getElementById("kor").value) || 0;
    const math = parseFloat(document.getElementById("math").value) || 0;
    const eng = parseFloat(document.getElementById("eng").value) || 0;
    const sci = parseFloat(document.getElementById("sci").value) || 0;

    const total = kor + math + eng + sci;
    const avg = total / 4;

    const result = document.getElementById("result");

    let grd = "";

    if (avg >= 90) {
        grd = "A";
    }
    else if (avg >= 80) {
        grd = "B";
    }
    else if (avg >= 70) {
        grd = "C";
    }
    else {
        grd = "D";
    }
    document.getElementById("total").textContent = (`총점: ${total}`);
    document.getElementById("avg").textContent = (`평균: ${avg.toFixed(2)}`);
    document.getElementById("grd").textContent = (`등급: ${grd}`);
}