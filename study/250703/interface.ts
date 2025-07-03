interface Movable {
    move(): void;
}

class Car implements Movable {
    move(): void {
        console.log("car"); //같은 형태에서 내용 교체 -> 오버라이드
    }
}

class Robot implements Movable {
    move(): void {
        console.log("robot");
    }
}