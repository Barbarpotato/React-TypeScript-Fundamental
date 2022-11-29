import { ChangeEvent } from 'react';
type InputProps = {
    value: string,
    //? ChangeEvent is a type from the event parameter.
    //? Restricting the handleClick to be Exclusively in HTMLInput Elements.
    //? void is what is going to return in this function.
    //? in this case we are not return anything, so we are using void.
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
};

export const Input = (props: InputProps) => {
    return (
        <input type={'text'} value={props.value} onChange={props.handleChange}></input>
    );
};