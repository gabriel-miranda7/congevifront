import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(null);
    let [user, setUser] = useState(null);

    const loginUser = async () => {
        let response; //Axios vai buscar os dados na rota
    }

    return(
        <AuthContext.Provider value={{'name':'gabriel'}}>
            {children   }
        </AuthContext.Provider>
    )
}