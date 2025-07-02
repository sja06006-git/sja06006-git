// 1. 타입에 맞는 값만 허용
function printAge(age: number) {
    if (typeof age !== "number") {
        throw new Error("숫자만 허용됩니다.");
    }
    console.log(`${age}살`);
}

printAge(20);

// 2. 커스텀 타입 검사 함수 만들기
type UserInput = string | number;

function isString(input: UserInput): input is string {
    return typeof input === "string";
}

function isNumber(input: UserInput): input is number {
    return typeof input === "number";
}

// 3. 반환 타입 유효성 검사

function getStatus(code: number): "sucess" | "error" {
    if (code === 200) {
        return "sucess";
    }
    return "error";
}

// 4. 매개변수가 string일 때만 깅리 출력하는 함수

function stringLenght(input: string | number) {
    if (typeof input === "string") {
        console.log(input.length);
    }
    else {
        console.log("문자열이 아닙니다. 숫자: " + input);
    }
}

stringLenght("나는 바보 멍청이.");
stringLenght(1000);
