import GreetingPage from './pages/GreetingPage';
import ProductListPage from './pages/ProductListPage';
import ApplyScrapPage from './pages/ApplyScrapPage';
import ScrapCompletePage from './pages/ScrapCompletePage';
import QuotationPage from './pages/QuotationPage';
import './App.css';
import { useState } from 'react';

function App() {
  const [stage, setStage] = useState(1);
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");
  const [dark, setDark] = useState(false)
  const [items, setItems] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState({name: "", age: 0});

  const preStage = () => {
    setStage(stage - 1);
  }

  const nextStage = () => {
    setStage(stage + 1);
  }

  const countUp = () => {
    setCount(count + 1);
  }

  const countDown = () => {
    setCount(count - 1);
  }

  const countDouble = () => {
    setCount(count * 2);
  }
  
  const toggleDark = () => {
      setDark(!dark);
  }

  return (
    <div>
      <button className='p-4 m-4 bg-blue-500' onClick={countUp}>카운트 증가 {count}</button>
      <button className='p-4 m-4 bg-blue-500' onClick={countDown}>카운트 감소 {count}</button>
      <button className='p-4 m-4 bg-blue-500' onClick={countDouble}>카운트 두배 {count}</button>
      <button className='p-4 m-4 bg-blue-500' onClick={preStage}>이전</button>
      <button className='p-4 m-4 bg-blue-500' onClick={nextStage}>다음</button>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={toggleDark}>테마: {dark ? '다크' : '라이트'}</button>
      <p>입력한 글자: {word}</p>
      <input onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setItems([...items, e.currentTarget.value]);
        }
      }} />
      <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
      <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <label>{checked ? '체크 됨' : '체크 안됨'}</label>
      <input onChange={(e) => setUser({...user, name: e.target.value})} />
      <input type='number' onChange={(e) => setUser({...user, age: +e.target.value})} />
      <p>{user.name} {user.age}세</p>

      {stage === 1 && < GreetingPage />}
      {stage === 2 && <ProductListPage />}
      {stage === 3 && <ScrapCompletePage />}
      {stage === 4 && <ApplyScrapPage />}
      {stage === 5 && <QuotationPage />}
      {stage === 6 && <ScrapCompletePage />}
    </div>
  );
}

export default App;
