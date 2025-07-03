class Book {
    title: string;
    author: string;
}

let book1 = new Book();
book1.title = "책1";
book1.author = "저자1";
let book2 = new Book();
book2.title = "책2";
book2.author = "저자2";
let book3 = new Book();
book3.title = "책3";
book3.author = "저자3";

let books1 = [book1, book2, book3];
let books2 = Array<Book>();
books2.push(book1);
books2.push(book2);
books2.push(book3);

for (let i=0; i<books1.length; i++) {
    console.log("책 이름: " + books1[i].title + ", 저자: " + books1[i].author);
}