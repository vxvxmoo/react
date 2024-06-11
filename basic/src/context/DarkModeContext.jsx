import { createContext, useState } from "react";

export const DarkModeContext = createContext();

// umbrellea를 만들어주는 거임
// 하위 컴포넌트들을 감싸주는
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
