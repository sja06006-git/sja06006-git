
# 📘 컴퓨터의 작동 원리 및 웹 구조 정리

---

## 1. 컴퓨터의 작동 원리: 폰 노이만 구조

### 📌 개요
- **폰 노이만 구조(Von Neumann Architecture)**: 현재 대부분의 컴퓨터가 따르는 구조
- 1945년, 존 폰 노이만(John von Neumann)이 제안

### 🔧 주요 구성 요소
| 구성 요소 | 설명 |
|-----------|------|
| 중앙처리장치(CPU) | 제어장치 + 산술논리연산장치(ALU) |
| 기억장치(Memory) | 명령어와 데이터를 함께 저장 (RAM 등) |
| 입출력장치(I/O) | 사용자와 데이터 송수신 (키보드, 모니터 등) |
| 버스(Bus) | 구성요소 간 데이터 전달 통로 |

![Image](https://github.com/user-attachments/assets/75cd6b22-a3dc-4894-8e9b-8da640eb823d)

### 💡 핵심 개념
- **명령어 저장 방식 (Stored Program Concept)**: 명령어와 데이터를 메모리에 저장
- **순차 처리**: 프로그램 카운터(PC)를 통해 명령어를 순서대로 실행

### ✅ 장점
- 하드웨어 변경 없이 소프트웨어로 다양한 작업 수행 가능
- 유연하고 자동화된 프로그래밍 가능

### ❗ 단점
- **폰 노이만 병목현상**: CPU와 메모리 간 데이터 처리 속도 차이로 병목 발생

---

## 2. HTML 시맨틱 태그 및 접근성

### 📌 시맨틱 태그란?
문서의 구조와 의미를 명확하게 표현하는 HTML 태그

| 태그 | 의미 |
|------|------|
| `<header>` | 문서 또는 섹션의 머리말 |
| `<nav>` | 내비게이션 영역 |
| `<main>` | 주요 콘텐츠 |
| `<article>` | 독립적인 콘텐츠 블록 |
| `<section>` | 주제별 콘텐츠 구간 |
| `<aside>` | 보조 콘텐츠 |
| `<footer>` | 문서 또는 섹션의 바닥글 |

### ✅ 시맨틱 태그의 장점
- 웹 접근성 향상 (스크린 리더 사용자의 이해도 증가)
- SEO 최적화 (검색 엔진이 의미를 잘 파악)
- 코드 가독성과 유지보수 용이

---

### 📌 웹 접근성 향상 방법 (a11y)
- 시맨틱 태그 적극 활용
- 이미지에 `alt` 속성 제공
- `label`과 `input` 연결
- `aria-*` 속성 사용 (`aria-label`, `aria-hidden` 등)
- 키보드 접근성 확보 (`tabindex`, `role`)
- 명확한 색상 대비와 폰트 크기 사용

---

## 3. DOM (Document Object Model)

### 📌 정의
HTML/XML 문서를 브라우저가 트리 형태의 **객체(Object)** 구조로 표현한 모델

### 🌲 구조 예시

HTML 코드:
```html
<body>
  <h1>Hello</h1>
  <p>World</p>
</body>
```

DOM 트리 구조:
```
Document
 └── html
     └── body
         ├── h1 ("Hello")
         └── p ("World")
```

### 🛠 DOM의 역할
- HTML 요소에 JS로 접근 및 조작 가능
- 웹 페이지 동적 생성/수정 가능
- 이벤트 리스닝 및 처리 가능

### 💻 JavaScript 예시
```js
const heading = document.querySelector("h1");
heading.textContent = "Hi!";
```

---

> 작성자: [박재훈]  
> 날짜: 2025-06-14
