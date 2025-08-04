# 🌐 RESTful API의 개념과 설계: 원칙, 메서드, 설계 전략 및 예제

---

## 1. REST 개요

### 📌 REST란?
- **REpresentational State Transfer**의 약자
- **자원(Resource)** 기반의 네트워크 아키텍처 스타일
- 주로 **HTTP**를 기반으로 **웹 API 설계 원칙**으로 사용

### ✅ REST 특징
- 클라이언트-서버 구조
- 무상태(Stateless)
- 캐시 가능
- 계층화 시스템
- 인터페이스 일관성 (Uniform Interface)
- 코드 온 디맨드 (선택적)

---

## 2. HTTP 메서드와 자원 처리

| 메서드 | 의미 | 사용 예시 | 동작 |
|--------|------|----------|------|
| `GET` | 자원 조회 | `/users/1` | ID가 1인 유저 정보 조회 |
| `POST` | 자원 생성 | `/users` | 새 유저 생성 |
| `PUT` | 자원 전체 수정 | `/users/1` | ID가 1인 유저 정보 전체 수정 |
| `PATCH` | 자원 일부 수정 | `/users/1` | 유저 이름만 수정 |
| `DELETE` | 자원 삭제 | `/users/1` | ID가 1인 유저 삭제 |

---

## 3. RESTful 엔드포인트 설계 방법

### ✅ 자원 중심 URI
- 명사 사용: `/users`, `/posts`, `/products`
- 복수형 사용 권장

### ✅ 계층 표현
- `/users/1/posts` : ID가 1인 유저의 포스트 목록

### ✅ 메서드로 동작 구분
- URI는 동사❌ → 동작은 HTTP 메서드로 구분

### ✅ 쿼리스트링 활용
- 필터링: `/users?role=admin`
- 정렬: `/products?sort=price`
- 페이징: `/posts?page=2&limit=10`

### ✅ 상태코드 사용
| 코드 | 의미 |
|------|------|
| `200 OK` | 요청 성공 |
| `201 Created` | 자원 생성 성공 |
| `204 No Content` | 삭제/수정 성공 (본문 없음) |
| `400 Bad Request` | 잘못된 요청 |
| `401 Unauthorized` | 인증 실패 |
| `404 Not Found` | 자원 없음 |
| `500 Internal Server Error` | 서버 오류 |

---

## 4. RESTful API 예제 (Express.js + MongoDB)

### 🧩 사용자 API 예시

```js
// userRoutes.js
import express from "express";
import User from "./models/User.js";
const router = express.Router();

// GET /users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// GET /users/:id
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// POST /users
router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

// PUT /users/:id
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// DELETE /users/:id
router.delete("/:id", async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).send("User not found");
  res.status(204).send();
});

export default router;
```

---

## 5. REST 설계 팁 및 베스트 프랙티스

| 항목 | 권장 방식 |
|------|-----------|
| 자원 명 | 명사 + 복수형 (`/users`, `/products`) |
| 상태코드 | 의미에 맞게 적절히 사용 |
| 버전 관리 | URI 또는 헤더로 (`/api/v1/...`) |
| 필터링/정렬 | 쿼리스트링 사용 |
| 인증 처리 | JWT, OAuth 등 사용 |
| 에러 응답 | 명확한 메시지와 상태코드 포함 (`{ error: "Not Found" }`) |

---

## 💡 핵심 요약

- REST는 **자원 중심 + HTTP 기반**의 설계 원칙
- **HTTP 메서드**를 통해 CRUD를 명확하게 표현
- **Express + MongoDB** 환경에서 RESTful API를 빠르게 구현 가능
- **RESTful URI와 응답 설계**는 API의 일관성과 확장성에 큰 영향

> ✅ 요약: REST는 단순하지만 강력한 API 설계 원칙이며, Express와 같은 프레임워크에서 구조화된 API 설계에 매우 적합함.

---

> 작성자: [박재훈]  

> 날짜: 2025-08-03
