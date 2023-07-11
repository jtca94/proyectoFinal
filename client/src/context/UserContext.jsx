{/* React */}
import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

export default function UserContextProvider({children}){
    {/* Estado global Cart */}
    const [cart, setCart] = useState([])
    return (
        <UserContext.Provider value={{cart, setCart}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)