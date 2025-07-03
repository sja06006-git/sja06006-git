class Person {
    name: string;
    age: number;

    introduce() {
        console.log(`안녕하세요, 저는 ${this.age}살의 ${this.name}입니다.`)
    }
}

let Alice = new Person(); //new로 인스턴스 생성 후 인스턴스에 밸류 주는 것 잊지 말기
Alice.name = "Alice";
Alice.age = 20;

Alice.introduce();