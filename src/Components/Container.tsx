import { CSSProperties, ReactNode } from 'react';

type ContainerProps = {
    styles: CSSProperties,
    children: ReactNode
}

//? De-Structuring the props to specified properties in form of object.
export const Container = ({ styles, children }: ContainerProps) => {
    return (
        <div style={styles}>
            {children}
        </div>
    );
};