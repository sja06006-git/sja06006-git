function checkAge() {
    const age = parseInt(document.getElementById("ageInput").value);
    const result = document.getElementById("result");
    if (isNaN(age)) {
        result.textContent = "숫자를 입력해주세요."
    }
    else if (age < 13) {
        result.textContent = "당신은 어린이입니다."
    }
    else if (age < 20) {
        result.textContent = "당신은 청소년입니다."
    }
    else if (age < 60) {
        result.textContent = "당신은 성인입니다."
    }
    else {
        result.textContent = "당신은 노인입니다."
    }
}