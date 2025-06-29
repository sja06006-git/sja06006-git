
# 📘 웹 요청과 응답의 본질 이해하기

---

## 1. HTTP의 Request / Response 구조

### 📌 개요
- HTTP(HyperText Transfer Protocol)는 클라이언트와 서버 간에 **요청(request)** 과 **응답(response)** 을 주고받는 **무상태(stateless)** 프로토콜

### 🔄 기본 구조

#### ✅ 요청(Request)
- 사용자가 브라우저나 앱에서 서버에 정보를 요청하는 메시지

```
요청 라인: GET /index.html HTTP/1.1
헤더: Host, User-Agent, Accept 등
본문: (POST일 경우) 전송할 데이터
```

#### ✅ 응답(Response)
- 서버가 요청에 대해 클라이언트에게 보내는 결과 메시지

```
상태 라인: HTTP/1.1 200 OK
헤더: Content-Type, Content-Length 등
본문: 실제 콘텐츠 (HTML, JSON 등)
```

### 📋 상태 코드 예시

| 코드 | 의미 | 설명 |
|------|------|------|
| 200 | OK | 성공 |
| 301 | Moved Permanently | 영구 이동 (Redirect) |
| 400 | Bad Request | 잘못된 요청 |
| 404 | Not Found | 페이지 없음 |
| 500 | Internal Server Error | 서버 내부 오류 |

---

## 2. Ajax / Forward / Redirect 차이

### 📌 Ajax란?
- **Asynchronous JavaScript and XML**
- 전체 페이지를 다시 로드하지 않고 **일부 데이터만 비동기적으로 요청**

```js
fetch("/api/data")
  .then(res => res.json())
  .then(data => console.log(data));
```

#### ✅ 장점
- 빠른 응답성과 사용자 경험 향상
- 서버와의 효율적 데이터 통신

---

### 📌 Forward와 Redirect의 차이

| 항목 | Forward | Redirect |
|------|---------|----------|
| 처리 주체 | 서버 내부 | 클라이언트로 리다이렉션 명령 |
| 주소창(URL) | 변경 없음 | 변경됨 |
| 요청 횟수 | 1회 | 2회 (요청 → 응답 → 새 요청) |
| 사용 예 | 내부 로직 전달 | 로그인 후 페이지 이동 등 |

#### ✅ Forward 예 (Java, JSP)
```java
request.getRequestDispatcher("result.jsp").forward(request, response);
```

#### ✅ Redirect 예
```java
response.sendRedirect("home.jsp");
```

---

## 💡 핵심 요약

- HTTP는 요청/응답 기반의 무상태 프로토콜
- Ajax는 페이지 새로고침 없이 서버와 통신
- Forward는 서버 내부 이동, Redirect는 클라이언트 재요청

---

> 작성자: [박재훈]  
> 날짜: 2025-06-30  
