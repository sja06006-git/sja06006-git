// const { reject } = require("async");

function fetchData() {
    //원래라면 서버 호출하나 settimeout 사용
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("data received");
        }, 3000);
    })
}

// fetchData().then((data) => {console.log(data)});
// console.log(fetchData());

async function loadData() {
    const result = await fetchData();
    console.log(result);
}

// loadData();


// 실전 예제 : 유저 정보 가져오기
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Alice", age: 25});
        }, 2000);
    })
}

async function showUser() {
    setInterval(() => {
        console.log("유저 정보 로딩중...");
    }, 500);
    const user = await getUser();
    console.log(`이름: ${user.name}, 나이: ${user.age}`);
}

// showUser();

//try catch

async function load() {
    try {
        const data = await fetch("http://example.com");
        const json = await data.json();
        console.log(json);
    } catch (err) {
        console.error("데이터 로딩 실패", err)
    }
}

// load();

// await 병렬 처리
// const p1 = fetch("https://example.com/data1");
// const p2 = fetch("https://example.com/data2");
// const p3 = fetch("https://example.com/data3");

// async function test() {
//     const [res1, res2, res3] = await Promise.all([p1, p2, p3]);

// }


// 과제 1: 간단한 비동기 함수 만들기
function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function helloAfter2s() {
 await delay(2000);
 console.log("2초 뒤 hello");
}

helloAfter2s();