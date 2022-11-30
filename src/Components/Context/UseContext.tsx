import { useContext } from 'react';
import { ThemeContext } from './ContextCreator';

export const Box = () => {

    //? using context from contextcreator.
    const theme = useContext(ThemeContext);

    return (
        <div style={{ background: theme.dark.foreground, color: theme.light.foreground }}>Hello There</div>
    );
};