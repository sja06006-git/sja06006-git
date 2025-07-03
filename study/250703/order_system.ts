class User {
    userName: string;
}

class Product {
    productName: string;
}

class Order {
    user: User;
    product: Product;

    summary() {
        console.log(`사용자 ${this.user.userName}가 상품 ${this.product.productName}를 구매했습니다.`);
    }
}

let user = new User();
user.userName = "박재훈";
let product = new Product();
product.productName = "감자칩";
let order = new Order();
order.user = user;
order.product = product;

order.summary();