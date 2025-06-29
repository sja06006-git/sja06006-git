
# 📘 3계층 구조와 CRUD 작동 흐름 정리

---

## 1. 3-Tier Architecture (3계층 아키텍처)

### 📌 개요  
- **3-Tier Architecture**는 웹 애플리케이션을 **기능별로 분리**한 구조로, 유지보수성과 확장성이 뛰어남.  
- 보통 **프리젠테이션 계층(클라이언트)**, **비즈니스 로직 계층(서버)**, **데이터 계층(DB)** 으로 나뉨.

### 🧱 계층 구성

| 계층 | 역할 | 예시 기술 |
|------|------|-----------|
| **Presentation (UI)** | 사용자 인터페이스 / 입력·출력 처리 | HTML, CSS, JS, React |
| **Business Logic (서버)** | 로직 처리 / 데이터 요청 및 가공 | Java, Node.js, Python, Spring, Express |
| **Data (DB)** | 데이터 저장 / 검색 / 수정 | MySQL, MongoDB, PostgreSQL |

### 💡 장점
- 역할 분리로 **코드 재사용** 및 **유지보수 용이**
- 다양한 클라이언트에서 동일한 비즈니스 로직 사용 가능
- 확장성 및 보안성 향상

---

## 2. CRUD 개념과 웹 작동 흐름

### 📌 CRUD란?
- **Create, Read, Update, Delete**의 약자  
- 데이터베이스를 다룰 때 기본적으로 사용되는 네 가지 기능

| 작업 | 설명 | HTTP 메서드 | SQL 구문 |
|------|------|--------------|----------|
| Create | 데이터 생성 | POST | INSERT |
| Read | 데이터 조회 | GET | SELECT |
| Update | 데이터 수정 | PUT / PATCH | UPDATE |
| Delete | 데이터 삭제 | DELETE | DELETE |

---

### 🌐 웹 흐름 예시

1. **사용자 요청 (Client)**
   - 브라우저에서 HTML 폼을 작성하거나 버튼을 클릭
   - JS로 서버에 요청 전송 (AJAX, fetch 등)

2. **서버 처리 (Business Logic Layer)**
   - 요청 파라미터 검증
   - DB에 접근해 요청된 작업 수행 (CRUD)
   - 가공한 결과를 다시 클라이언트에 응답

3. **데이터베이스 접근 (Data Layer)**
   - SQL 쿼리를 통해 실제 데이터 조작

---

### 📄 예시 흐름: 게시글 등록

```
사용자 → [글쓰기 버튼 클릭]  
→ 클라이언트: POST /posts (제목, 내용 포함)  
→ 서버: 데이터 검증 후 INSERT INTO posts VALUES (...)  
→ DB: 게시글 저장  
→ 서버: 응답 (200 OK, 게시글 ID 포함)  
→ 클라이언트: 화면 갱신 또는 알림 표시
```

---

### 💻 JavaScript (클라이언트 측) 예시
```js
fetch("/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "제목", content: "내용" })
})
.then(res => res.json())
.then(data => alert("등록 성공! ID: " + data.id));
```

---

> 작성자: [박재훈]  
> 날짜: 2025-06-22
