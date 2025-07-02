class Person {
    name: string;
    age: number;

    introduce(): string {
     return `hi, I'm ${this.name}`;   
    }
}

class Person2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): string {
     return `hi, I'm ${this.name}`;   
    }
}

class Car implements Vehicle {
    carModel: string;
    owner: string;
    carWeight: number;
    buyYear: number;
    isSunk: boolean;
    distance: number;
    carNumber: number;

    constructor(
        // carModel: string,
        // owner: string,
        // carWeight: number,
        // buyYear: number,
        // isSunk: boolean,
        // carNumber: number
    ) {}

    
    drive() {
        console.log("go");
    }

    alarm() {
        console.log("beep beep");
    }
    back() {
        console.log("back");
    }

    break() {
        console.log("break");
    }

    accelerate() {
        console.log("accelerate");
    }
        
    stiring() {
        console.log("stiring");
    }
}

class truck extends Car {
    storage: number;

    operate () {
        console.log("operate");
    }

    spread () {
        console.log("spread");
    }
}

class bus extends Car {
    passenger: number;
    busNumber: number;

    constructor() {
        super();
        console.log("done");
    }

    openDoor() {
        console.log("open door");
    }

    closeDoor() {
        console.log("close door");
    }

    stiring() {
        console.log("");
    }
}

interface Vehicle {
    break(): void;
    accelerate(): void;
    stiring(): void;
}

//generic
function identity<T>(value: T): T {
    return value;
}

let output1 = identity<number>(123);
let output2 = identity<string>("123");