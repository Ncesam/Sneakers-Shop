import { useContext } from "react"
import { ThemeContext } from "."
import { IThemeContextType } from "types/theme";



export const useTheme = (): IThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}