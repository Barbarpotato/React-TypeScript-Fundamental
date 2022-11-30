import { useContext } from 'react';
import { ThemeContext } from './ContextCreator';

export const Box = () => {

    //? using context from contextcreator.
    const theme = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme.dark.background, color: theme.light.foreground }}>Test There</div>
    );
};