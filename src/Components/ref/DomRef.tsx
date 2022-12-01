import { useRef, useEffect } from 'react';

export const DomRef = () => {

    //? You can add the non null assertion (null!)
    //? when you are sure the reference never null.
    const myInput = useRef<HTMLInputElement | null>(null!)

    useEffect(() => {
        myInput.current?.focus()
    })

    return (
        <div>
            <input type={'text'} ref={myInput}></input>
            <button>Focusing the input</button>
        </div>
    )
}