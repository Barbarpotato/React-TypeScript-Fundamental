//? in the App.tsx we have properties called 'name' which is containing the object
//? create the property called name in the PersonProps which have the objec value.
type PersonProps = {
    name: {
        first: string,
        last: string
    }
};

//? the props parameter have a Type PersonProps
export const Person = (props: PersonProps) => {
    return (
        <h2>{props.name.first} {props.name.last}</h2>
    )
};