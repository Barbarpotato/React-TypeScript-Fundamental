import { MouseEvent } from 'react';

type ButtonProps = {
    //? MouseEvenet is the type of the event parameter.
    //? Restricting the handleClick to be Exclusively in HTMLButton Elements.
    //? void is what is going to return in this function.
    //? in this case we are not return anything, so we are using void.
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.handleClick}>Click</button >
    );
};
