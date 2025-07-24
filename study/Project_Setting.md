## 설치 명령어
```bash
npx create-react-app A --template typescript

# 폰트 및 유틸리티 설치
npm i chance luxon @fontsource/material-icons
npm i -D @types/chance @types/luxon

# TailwindCSS v4 및 DaisyUI 구성
npm i -D postcss autoprefixer tailwindcss@3.4.17
npm i -D daisyui@4.12.12
npx tailwindcss init -p

# Redux 구성
npm i redux @reduxjs/toolkit react-redux
npm i redux-logger
npm i -D @types/redux-logger
npm i react-dnd react-dnd-html5-backend
npm i --legacy-peer-deps react-beautiful-dnd
npm i -D @types/react-beautiful-dnd --legacy-peer-deps

# 라우터 구성
npm i react-router-dom
```

## tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [{pattern: /^line-clamp-(\d+)$/}],
  plugins: [require("daisyui")],
}



```

## src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

```

## src/index.tsx
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fontsource/material-icons";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

```


## postcss.config.js
```js

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
