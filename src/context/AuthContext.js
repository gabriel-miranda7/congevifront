import { createContext, useState, useEffect } from 'react'
import axios from '../configs/axiosConfig'
const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    //localStorage.getItem('authTokens')
    let [authTokens, setAuthTokens] = useState(null);
    let [user, setUser] = useState(null);

    const loginUser = async (e) => {
        e.preventDefault();
    }

    let contextData = {
        user:user,
        loginUser:loginUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            { children }
        </AuthContext.Provider>
    )
}