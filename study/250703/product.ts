class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`제품명: ${this.name}, 가격: ${this.price}만원`)
    }
}

let mac = new Product("MacBook", 150);
mac.display();