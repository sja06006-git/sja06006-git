
# 📘 데이터 교환 포맷 및 시리얼라이징 이해

---

## 1. 데이터 교환 포맷 개요

### 📌 개요
- 클라이언트와 서버 또는 시스템 간 데이터 전달 시 사용하는 **표준 포맷**
- 일반적으로는 **텍스트 기반의 포맷**을 사용하며, 언어나 플랫폼에 독립적

---

## 2. 대표적인 포맷 비교

| 항목 | JSON | XML | YAML |
|------|------|-----|------|
| 구조 | 키-값 쌍 | 태그 기반 | 들여쓰기 기반 |
| 가독성 | 높음 | 낮음 | 매우 높음 |
| 무게 | 가벼움 | 무거움 | 가벼움 |
| 주석 지원 | ❌ | ⭕ | ⭕ |
| 데이터 표현력 | 중간 | 높음 | 높음 |
| 파싱 속도 | 빠름 | 느림 | 보통 |
| 사용 예시 | 웹 API, JS | RSS, SOAP | 설정 파일 (CI/CD 등) |

---

### ✅ JSON 예시
```json
{
  "name": "Jaehoon",
  "age": 27,
  "isAdmin": false
}
```

### ✅ XML 예시
```xml
<user>
  <name>Jaehoon</name>
  <age>27</age>
  <isAdmin>false</isAdmin>
</user>
```

### ✅ YAML 예시
```yaml
name: Jaehoon
age: 27
isAdmin: false
```

---

## 3. 시리얼라이징(Serialization)

### 📌 개요
- 객체를 텍스트(또는 바이너리)로 변환하여 **전송하거나 저장할 수 있게 하는 과정**
- 반대 개념은 **디시리얼라이징(Deserialization)**

### ✅ 사용 예
- API 요청/응답 (JSON 변환)
- 로컬 파일 저장
- 네트워크 데이터 전송

```js
// JS 객체 → JSON 문자열 (시리얼라이즈)
const obj = { name: "Jaehoon", age: 27 };
const jsonStr = JSON.stringify(obj);

// JSON 문자열 → JS 객체 (디시리얼라이즈)
const parsed = JSON.parse(jsonStr);
```

---

## 4. HTTPS와 SSL 인증서 기초

### 📌 HTTPS란?
- **HTTP + SSL/TLS**가 결합된 **보안 통신 프로토콜**
- 데이터를 **암호화**하여 중간자 공격(Man-in-the-Middle) 방지

---

### ✅ SSL 인증서란?
- 웹사이트의 신원을 확인하고, **암호화 통신을 가능하게 하는 인증 파일**
- **CA(Certificate Authority)**가 발급
- 브라우저 주소창에 🔒 자물쇠 표시

---

### ✅ TLS란?

- **TLS (Transport Layer Security)**는 SSL의 **후속 버전**으로, 현재는 TLS가 표준
- 이름은 다르지만, SSL이라고 통칭할 때 대부분 **TLS**를 의미함
- 최신 브라우저와 서버는 **TLS 1.2 또는 TLS 1.3**을 사용

| 구분 | SSL | TLS |
|------|-----|-----|
| 최신 버전 | 3.0 (비권장) | 1.3 (2024년 기준 권장) |
| 보안성 | 취약 | 향상됨 |
| 사용 여부 | 거의 사용 안 함 | 널리 사용됨 |

> ✅ 정리: 실무에서는 **SSL 인증서**라는 표현을 쓰지만, 실제 사용되는 프로토콜은 대부분 **TLS**

---

### 🔐 HTTPS 통신 흐름 (핸드셰이크 과정 요약)

1. **클라이언트 → 서버**: 인증서 요청
2. **서버 → 클라이언트**: 공개키 포함된 인증서 전달
3. **클라이언트**: 인증서 유효성 검사, 대칭키 생성
4. **클라이언트 → 서버**: 대칭키를 공개키로 암호화해서 전달
5. **서버**: 받은 키로 대칭키 복호화, 이후부터는 대칭키 기반 암호화 통신

---

## 💡 핵심 요약

- JSON, XML, YAML은 각각 장단점이 있으며 목적에 맞게 사용
- 시리얼라이징은 객체 데이터를 전송 가능한 형태로 변환하는 기술
- HTTPS는 SSL/TLS 기반 보안 프로토콜로, 데이터 암호화를 통해 보안 확보
- SSL 인증서는 서버의 신원 보장 및 암호화 통신을 위한 핵심 구성 요소
- 현재는 **TLS**가 SSL을 대체하여 실제 통신에서 사용됨

---

> 작성자: [박재훈]  
> 날짜: 2025-07-06  
