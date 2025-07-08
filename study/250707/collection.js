// Set: 중복제거
const set = new Set([1, 2, 2, 2, 3, 4]);
set.add(5); //5를 삽입
set.add(5); //재삽입 후 중복 제거 확인
set.delete(2); //2를 삭제
console.log(set);

// Map
const map = new Map();
map.set("name", "Lee"); //key name에 Lee값 저장 후 key로 호출
map.set("age", 20);
console.log(map.get("name"));
console.log(map.get("age"));
console.log(map.size); //map의 크기 확인
map.delete("age"); // age를 삭제
console.log(map);

for (const val of set) {
    console.log(val);
}

for (const [key, val] of map) {
    console.log(key, val);
}