// import { useEffect, useState } from "react"
// import Clock from "./pages/Clock"

// export default function App() {
//   const [today, setToday] = useState(new Date())
//   useEffect(() => {
//     const duration = 1000;
//     const id = setInterval(() => {
//       setToday(new Date());
//       // console.log('setToday', setToday) //setToday는 세터이고 setToday() 내부의 갱신 값을 today = useState(new Date())인 초깃값과 비교하기 위한 값을 받는 자리일 뿐 실제로 변화하는 값을 가지지 않나?
//     }, duration)
//     return () => clearInterval(id)
//   }, [])
//   return <Clock today={today}/>
// }

// import { useClock } from "./hooks";
// import Clock from "./pages/Clock";

// export default function App() {
//   const today = useClock()
//   return <Clock today={today}/>
// }


// 아래는 useState 연습

import { useState } from "react";

// export default function App() {
//   const [number1, setNumber1] = useState(0);
//   const [number2, setNumber2] = useState(0);

//   return (
//     <div>
//       <h2>{"숫자 덧셈기"}</h2>
//       <div className="flex flex-row items-center">
//         <input type="number" value={number1} onChange={(e) => setNumber1(parseInt(e.target.value))} />
//         <span>{"+"}</span>
//         <input type="number" value={number2} onChange={(e) => setNumber2(parseInt(e.target.value))} />
//       </div>

//       <p>{`덧셈 결과는: ${number1} + ${number2} = ${number1 + number2}`}</p>
//     </div>
//   )
// }

export default function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  return (
    <div>
      <h2>{"문자열 덧셈기"}</h2>
      <div className="flex flex-row items-center">
        <input type="text" value={number1} onChange={(e) => setNumber1(e.target.value)} />
        <span>{"+"}</span>
        <input type="text" value={number2} onChange={(e) => setNumber2(e.target.value)} />
      </div>

      <p>{`덧셈 결과는: ${number1} + ${number2} = ${number1 + number2}`}</p>
    </div>
  )
}