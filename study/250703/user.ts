class User {

    name: string;

    constructor(name: string) {
        this.name = name;
    }
    // constructor(public name: string) {}

    greet() {
        console.log(`Hello, My name is ${this.name}`);
    }
}

let user = new User("홍길동");
user.greet();