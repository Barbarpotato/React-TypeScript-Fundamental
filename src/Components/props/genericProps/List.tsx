//? using <T> to use Generic
//? it is like a parameter of type
//? you can fill the parameter with some type of data.
type ListProps<T> = {
    data: T[],
    onClick: (value: T) => void
}

//? calling the generic type to List functional component.
export const List = <T extends number | string>({ data, onClick }: ListProps<T>) => {
    return (
        <div>
            {
                data.map((val) => {
                    return (
                        <div>
                            <button onClick={() => onClick(val)}>{val}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}