import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";

export function Header() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) throw new Error('ThemeContext not found');

  const { theme, toggleTheme } = themeContext;

  const languageContext = useContext(LanguageContext);
  if (!languageContext) throw new Error('languageContext not found');

  const { language, setLanguage } = languageContext;

  return (
    <header
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '1rem',
      }}
    >
      <h1>내 웹사이트</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '다크 모드' : '라이트 모드'}
      </button>
      <button onClick={() => setLanguage(language === "ko" ? "jp" : "ko")}>
        {language === 'ko' ? '日本語' : '한국어'}
      </button>
    </header>
  )
}
