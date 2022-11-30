import React, { createContext, useState } from 'react'

//? functional component props type
type userType = {
    children: React.ReactNode
};

//? the type of user state.
type authUser = {
    username: string,
    email: string
};

//? the type of create context.
type contextType = {
    user: authUser | null,
    setUser: React.Dispatch<React.SetStateAction<authUser | null>>
}

//? create context where the type must be contextType or it can be a null value.
export const UserContext = createContext<contextType | null>(null);

//? functional component de-structuring props to be a children property in userType.
export const User = ({ children }: userType) => {

    //? define the type of user state. it can be a authUser type or can be a null.
    const [user, setUser] = useState<authUser | null>(null);

    //? provider givin the access properties to a children component
    //? value is what value you are going to pass in the children.
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
