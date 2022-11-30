import { useContext } from 'react';
import { UserContext } from './UserCreateContext';

export const Consumer = () => {

    const user = useContext(UserContext);

    const handleLogin = (): void => {
        user?.setUser({
            username: "darmawan",
            email: "darmawanjr88@gmail.com"
        });
    };

    const handleLogout = (): void => {
        user?.setUser(null);
    }

    return (
        <div>
            <h1>{user?.user?.email}</h1>
            <h1>{user?.user?.username}</h1>
            <button onClick={() => handleLogin()}>Login</button>
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
};