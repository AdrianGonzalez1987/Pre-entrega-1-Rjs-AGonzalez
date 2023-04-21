import { createContext, useState } from "react";



export const LoginContext = createContext()
const DATA_USERS = [
    {
        id: 1,
        email: 'admin@endo.com',
        password: 'endo'
    },
    {
        id: 2,
        email: 'user1@endo.com',
        password: 'user1'
    },
    {
        id: 3,
        email: 'user2@endo.com',
        password: 'user2'
    }
    
]


export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false
    }) 

    const login = (values) => {
        const match = DATA_USERS.find((user) => user.email === values.email && user.password === values.password)

        if(match) {
            setUser({
                email: match.email,
                logged: true
            })
        }
    }

    const logout = () => {
        setUser({
            email: null,
            logged: false
        })
    }

    return (
        <LoginContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </LoginContext.Provider>
    )
}