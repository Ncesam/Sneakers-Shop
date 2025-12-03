import { createContext, useMemo, useState } from "react";
import { lightColors } from "./colors";
import { ThemeContextType } from "types/theme";


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  const contextValue = useMemo(() => {
    const colors = themeConfig[theme];

    return {
      isDarkMode: theme === 'dark',
      colors,
      toggleTheme,
    };
  }, [theme]); 

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};


const themeConfig = {
  light: lightColors,
  dark: {}
}


export const ThemeContext = createContext<ThemeContextType>(
    {
        colors: lightColors,
        isDarkMode: false,
        toggleTheme: () => {},
    }
)