//? names value meaning that we have some array and each element of its array, is an object.
type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
};

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
};