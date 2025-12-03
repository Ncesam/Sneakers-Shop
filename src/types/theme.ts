

export interface ColorSchema {
    red: string;
    background: string;
    text: string;
    hint: string;
    subTextLight: string;
    subTextDark: string;
    block: string;
    disable: string;
    accent: string;
}


export interface ThemeContextType {
    isDarkMode: boolean;
    colors: ColorSchema;
    toggleTheme: () => void;
}
