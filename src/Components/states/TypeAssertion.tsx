import { useState } from "react";

type UserProperty = {
    name: string,
    email: string
};

export const TypeAssertion = () => {
    //? in typescript, we will receive an error message
    //? when isLogin variable is assigned other than a boolean type.
    const [isLogin, setisLogin] = useState(false);

    //? we use type assertion, we dont use the optional chaining operator in the p tag html
    //? initialize user useState as an empty object.
    const [user, setUser] = useState<UserProperty>({} as UserProperty);

    const handleLogin = (): void => {
        setisLogin(true);
        setUser({
            name: "Darmawan",
            email: "darmawanjr88@gmail.com"
        });
    };

    return (
        <div>
            <button onClick={handleLogin}>Log in</button>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
};