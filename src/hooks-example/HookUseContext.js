import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function HookUseContext() {
  const [mode, setMode] = useState('dark');

  function toggleTheme() {
    setMode(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeContext.Consumer>
        {({ mode }) => (
          <div style={{ padding: "24px", background: "#EEEEEE" }}>
            <h1>useContext - {mode}</h1>
            <Button />
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}

function Button() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <button type="button" onClick={toggleTheme}>{mode}</button>
  )
}