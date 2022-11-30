import { createContext } from 'react';
import { theme } from './theme';

//? children properties type is the child node from the ThemeContextProvider.
type ThemeContextProviderProps = {
    children: React.ReactNode
};

//? create context from the theme object
export const ThemeContext = createContext(theme);

//? de-structuring the props to be object with property children.
export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
};

