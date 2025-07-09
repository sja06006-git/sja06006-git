// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// export default function App() {
//   // const texts = [<p key={1}>hello</p>, <p key={2}>world</p>]
//   // map 활용

//   // const texts = ["hello", "world"].map((text, index) => 
//   //   <p key={index}>{text}</p>
//   // );
  
//   const texts = ["hello", "world"].map((text, index) => 
//     <p key={index} children={text}></p>
//   );
//   return <div children={texts}></div>
// }

// // return 부분 내용
// // <div>
// //         {/* 본래 아래 형태이나 map을 활용해 {texts}로 대체 가능 */}
// //         {/* <p key={texts[0].index}>{texts[0].text}</p>
// //         <p key={texts[1].index}>{texts[1].text}</p> */}
// //         {texts}
// //       </div>

// // export default App;


//이벤트 속성 이해하기

// import EventListener from './pages/EventListener';
// import Onclick from './pages/OnClick';
// import ReactOnClick from './pages/ReactOnclick';
// import DispatchEvent from './pages/DispatchEvent';
// import EventBubbling from './pages/EventBubbling';
// import StopPropagation from './pages/StopPropagation';
// import VariousInputs from './pages/VariousInputs';
// import OnChange from './pages/OnChange';
// import FileInput from './pages/FileInput';
import DragDrop from './pages/DragDrop';
// import FileDrop from './pages/FileDrop';

export default function App() {
  return (
    <div>
      {/* <EventListener /> */}
      {/* <Onclick /> */}
      {/* <ReactOnClick /> */}
      {/* <DispatchEvent /> */}
      {/* <EventBubbling /> */}
      {/* <StopPropagation /> */}
      {/* <VariousInputs /> */}
      {/* <OnChange /> */}
      {/* <FileInput /> */}
      <DragDrop />
      {/* <FileDrop /> */}
    </div>
  )
}

