//? Specifying the type of some properties in object.
//? 
type GreetProps = {
    name: string,
    messageCount?: number
    isLoggedIn: boolean
};

//? Assingning the GreetProps type in props parameter.
export const Greet = (props: GreetProps) => {
    // if messageCount is empty in the parent node we can set the initial value like this.
    const { messageCount = 0 } = props;
    return (
        <h2>{props.isLoggedIn ? `Welcome ${props.name}! You have ${messageCount} unread messages.` :
            `Welcome Guests!`}</h2>
    )
};


