# 🧱 프로그래밍 아키텍처 패턴 비교: MVC, MVP, MVVM

---

## 1. 아키텍처 패턴 개요

### 📌 개요
- 사용자 인터페이스(UI)와 비즈니스 로직을 **분리**하기 위해 고안된 **소프트웨어 아키텍처 패턴**
- 코드의 **유지보수성**, **테스트 용이성**, **역할 분리**를 개선
- 대표적인 패턴: **MVC**, **MVP**, **MVVM**

---

## 2. 패턴 구조 및 비교

| 항목 | MVC | MVP | MVVM |
|------|-----|-----|------|
| 구성 요소 | Model, View, Controller | Model, View, Presenter | Model, View, ViewModel |
| View의 역할 | 사용자 입력 수신, 화면 출력 | 사용자 입력 수신, 화면 출력 | 바인딩된 UI를 통해 상태 표시 |
| 중간 계층 | Controller | Presenter | ViewModel |
| View ↔ 중간 계층 | View가 Controller를 호출 | View가 Presenter에 의존 | View와 ViewModel은 **양방향 바인딩** |
| 단위 테스트 용이성 | 보통 | 높음 | 높음 |
| 사용 예 | 웹 (Spring MVC 등) | Android 초창기 | Android (Data Binding), WPF, Vue 등 |

---

## 3. 패턴 구조 흐름 요약

### ✅ MVC 구조
```
[User] → View ↔ Controller ↔ Model
                    ↕
              업데이트된 데이터 → View
```

### ✅ MVP 구조
```
[User] → View ↔ Presenter ↔ Model
             ↕
     View는 Presenter에 결과만 요청
```

### ✅ MVVM 구조
```
[User] → View ⇄ ViewModel ⇄ Model
       (Data Binding)
```

---

## 4. 패턴별 장단점 요약

| 패턴 | 장점 | 단점 |
|------|------|------|
| **MVC** | - 구조가 단순하고 이해하기 쉬움<br>- 많은 프레임워크에서 기본 지원(Spring, Django 등) | - View와 Controller 간의 결합도가 높아질 수 있음<br>- 규모가 커지면 복잡도 증가 |
| **MVP** | - 테스트 용이 (Presenter를 단독 테스트 가능)<br>- View가 단순하고 역할이 명확함 | - View와 Presenter 간 연결 코드가 많아짐<br>- 바인딩 코드가 반복될 수 있음 |
| **MVVM** | - 양방향 바인딩으로 UI 코드 감소<br>- ViewModel 테스트 용이 | - 바인딩 구현이 복잡할 수 있음<br>- 과도한 바인딩은 디버깅 어려움 초래 |

---

## 5. 패턴 선택 기준

| 상황 | 적합한 패턴 |
|------|-------------|
| 전통적인 웹 애플리케이션 | MVC |
| 테스트가 중요한 모바일 앱 | MVP |
| 데이터 바인딩 지원 UI 프레임워크 | MVVM |

---

## 💡 핵심 요약

- **MVC**: 고전적인 구조. 웹 개발에 자주 사용. View와 Controller 간 연결이 복잡해질 수 있음
- **MVP**: 테스트 중심 구조. Presenter가 로직 중심. View는 수동적
- **MVVM**: UI 자동화에 유리. ViewModel과 View의 바인딩이 핵심

> ✅ 요약: 세 패턴 모두 역할 분리를 목표로 하지만 **구현 방식과 의존성**이 다름. 프로젝트의 성격과 요구사항에 따라 적절한 패턴을 선택해야 함.

---

> 작성자: [박재훈]  
> 날짜: 2025-07-13
