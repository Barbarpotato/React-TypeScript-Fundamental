// Specifying the type of some properties in object.
type GreetProps = {
    name: string,
    messageCount: number
    isLoggedIn: boolean
};

// Assingning the GreetProps type in props parameter.
export const Greet = (props: GreetProps) => {
    return (
        <h2>{props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages.` :
            `Welcome Guests!`}</h2>
    )
};


