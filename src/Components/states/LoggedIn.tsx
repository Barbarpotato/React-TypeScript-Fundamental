import { useState } from "react";

type UserProperty = {
    name: string,
    email: string
};

export const LoggedIn = () => {
    //? in typescript, we will receive an error message
    //? when isLogin variable is assigned other than a boolean type.
    const [isLogin, setisLogin] = useState(false);

    //? useState Future Value problem
    //? define the type of the usestate
    //? in this case, user useState can be type of null 
    //? or type of UserProperty that we intialize in above.
    const [user, setUser] = useState<UserProperty | null>(null);

    const handleLogin = (): void => {
        setisLogin(true);
        setUser({
            name: "Darmawan",
            email: "darmawanjr88@gmail.com"
        });
    };

    const handleLogout = (): void => {
        setisLogin(false);
        setUser(null);
    };

    //? because the the user property can possible value as a null,
    //? then we can use ?. to prevent accessing the unrecognize property.
    return (
        <div>
            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleLogout}>Log out</button>
            <p>{isLogin ? 'You are currently login' : 'you are log out'}</p>
            <p>Hello, {user?.name}</p>
            <p>{user?.email}</p>
        </div>
    );
};