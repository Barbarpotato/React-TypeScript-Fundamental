import { useState, useRef, useEffect } from "react"

type refType = {
    count: number,
    length: number
}

export const MutableRef = () => {

    const [inputVal, setInputVal] = useState<string>('')

    const count = useRef<refType>({ count: 0, length: 0 })

    useEffect((): void => {
        count.current.count = count.current.count + 1
        // count.current.length = inputVal.length;
    }, [inputVal])

    return (
        <div>
            <p>Render: {count.current.count} times</p>

            <input value={inputVal} onChange={(e) => setInputVal(e.target.value)}></input>
        </div>
    )
}