import { createContext, FC, useContext, useMemo, useState } from "react";
import { lightColors } from "./colors";
import { ThemeContextType } from "./types";


export const ThemeProvider: FC<{children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<'light'| 'dark'>('light');

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


export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
