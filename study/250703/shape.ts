abstract class Shape {
    abstract getAreaRectangle(width: number, height: number): number;
    abstract getAreaCircle(radius: number): number;
    //추상 메소드가 하나 이상 존재한다면 아래처럼 일반 값과 메소드도 ok
    // size: number;
    // calc(): number {
    //     return 1;
    // }
}

class Rectangle extends Shape {
    width: number;
    height: number;
    getAreaRectangle(): number {
        // throw Error("Unimplemented method");
        return this.width * this.height;
    }
    getAreaCircle(radius: number): number {
        throw Error("Unimplemented method");
        // return this.radius * this.radius * Math.PI;
    }
}

class Circle extends Shape {
    radius: number;
    getAreaRectangle(): number {
        throw Error("Unimplemented method");
        return this.radius * this.radius * Math.PI;
    }
    getAreaCircle(radius: number): number {
        // throw Error("Unimplemented method");
        return this.radius * this.radius * Math.PI;
    }
}

let rectangle = new Rectangle();
rectangle.width = 6;
rectangle.height = 4;
console.log(`넓이는 $[rectangle.width] x $[]`);
let circle = new Circle();
circle.radius = 5;
console.log();