

export interface IColorSchema {
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


export interface IThemeContextType {
    isDarkMode: boolean;
    colors: IColorSchema;
    toggleTheme: () => void;
}
