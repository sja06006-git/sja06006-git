# 🔒 CORS 정책과 웹 보안 기본 개념: Origin, Header, Preflight 요청 이해

------------------------------------------------------------------------

## 1. 웹 보안과 CORS 개요

### 📌 CORS란?

-   **Cross-Origin Resource Sharing**의 약자
-   브라우저가 **다른 출처(Origin)** 의 자원 요청을 제어하기 위한 **보안
    메커니즘**
-   기본적으로 브라우저는 **동일 출처 정책(Same-Origin Policy, SOP)** 을
    적용하여, 다른 출처의 요청을 차단함

### ✅ 동일 출처(Same-Origin)의 정의

-   **Origin = Protocol + Domain + Port**
-   예시:
    -   `https://example.com:443`\
    -   `http://example.com:80` → 포트와 프로토콜이 다르므로 서로 다른
        Origin

------------------------------------------------------------------------

## 2. CORS 동작 원리

### ✅ 기본 요청 (Simple Request)

-   조건 충족 시 별도의 사전 검사(Preflight) 없이 요청 전송
-   조건:
    -   메서드: `GET`, `POST`, `HEAD` 만 허용
    -   헤더: `Accept`, `Content-Type(단순값)`, `Origin` 등 제한된 기본
        헤더만 가능
    -   Content-Type: `text/plain`, `application/x-www-form-urlencoded`,
        `multipart/form-data`

### ✅ Preflight 요청 (사전 요청)

-   `OPTIONS` 메서드로 서버에 먼저 "이 요청 허용해도 되나요?" 라고
    물어봄
-   서버가 허용하면 실제 요청 진행
-   복잡 요청(예: `PUT`, `DELETE`, `PATCH`, 커스텀 헤더 포함)이 있을 때
    수행

------------------------------------------------------------------------

## 3. CORS 관련 주요 헤더

  --------------------------------------------------------------------------------------------
  헤더                                 설명                    예시
  ------------------------------------ ----------------------- -------------------------------
  `Origin`                             요청을 보낸 출처        `Origin: https://client.com`

  `Access-Control-Allow-Origin`        허용할 출처             `*` 또는 `https://client.com`

  `Access-Control-Allow-Methods`       허용할 HTTP 메서드      `GET, POST, PUT, DELETE`

  `Access-Control-Allow-Headers`       허용할 요청 헤더        `Content-Type, Authorization`

  `Access-Control-Allow-Credentials`   쿠키/인증정보 허용 여부 `true`

  `Access-Control-Max-Age`             Preflight 캐시 시간(초  `3600`
                                       단위)                   
  --------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 4. 예제 흐름

### 🧩 Preflight 요청 예시

``` http
OPTIONS /api/data HTTP/1.1
Host: api.server.com
Origin: https://client.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type, Authorization
```

### 🧩 서버 응답 예시

``` http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://client.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 3600
```

→ 이후 브라우저는 `PUT /api/data` 요청을 정상적으로 전송함

------------------------------------------------------------------------

## 5. 웹 보안과 CORS의 관계

### ✅ CORS의 목적

-   클라이언트(브라우저)와 서버 간 자원 공유를 **보안적으로 허용**하기
    위함
-   서버에서 허용하지 않으면 브라우저가 차단

### ✅ 웹 보안 기본 원칙

-   **인증(Authentication)**: 사용자를 식별 (ex. JWT, 세션 쿠키)
-   **인가(Authorization)**: 권한에 따라 접근 제어
-   **무결성(Integrity)**: 데이터가 변조되지 않도록 보장
-   **기밀성(Confidentiality)**: 민감한 정보 보호 (ex. HTTPS, 암호화)
-   **로그 및 모니터링**: 공격 시도 추적 및 방어

------------------------------------------------------------------------

## 6. CORS 설정 (Express.js 예제)

``` js
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "https://client.com",  // 허용할 Origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true              // 쿠키, 인증정보 포함 허용
}));

app.get("/api/data", (req, res) => {
  res.json({ message: "CORS 요청 성공!" });
});

app.listen(4000, () => console.log("Server running on port 4000"));
```

------------------------------------------------------------------------

## 7. CORS 베스트 프랙티스

  항목               권장 방식
  ------------------ -------------------------------------------
  Origin 허용        `*` 보다는 특정 도메인 명시
  Credentials        필요한 경우에만 `true` 설정
  Preflight 최적화   `Access-Control-Max-Age` 활용
  보안 강화          HTTPS 사용, 민감 정보 헤더 최소화
  에러 처리          브라우저 콘솔 오류 확인 후 서버 설정 조정

------------------------------------------------------------------------

## 💡 핵심 요약

-   **CORS**는 브라우저의 **동일 출처 정책(SOP)** 한계를 보완하기 위한
    보안 메커니즘\
-   요청은 **Simple Request**와 **Preflight Request**로 나뉨\
-   서버는 **CORS 관련 응답 헤더**를 통해 허용 여부를 명시해야 함\
-   올바른 설정 없이는 브라우저에서 요청이 차단됨\
-   **Origin 관리, 최소 권한 원칙, HTTPS 적용**은 필수적인 웹 보안
    전략임

------------------------------------------------------------------------

> 작성자: \[박재훈\]


> 날짜: 2025-08-10
