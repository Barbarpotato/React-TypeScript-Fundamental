export type PrivateType = {
    name: string
}

export const Private = ({ name }: PrivateType) => {
    return (
        <p>Hello, {name}</p>
    )
}