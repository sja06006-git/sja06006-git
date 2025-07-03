class Animal {
    as: string;
    sound(): void {
        console.log("");
    }
}

class Dog extends Animal {
    sound(): void {
        console.log("멍멍!")
    }
}

class Cat extends Animal {
    sound(): void {
        console.log("")
    }
}

let cat = new Cat();
let dog = new Dog();
cat.sound();
dog.sound();