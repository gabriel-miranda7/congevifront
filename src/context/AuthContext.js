import { createContext, useState, useEffect } from 'react'
import axios from '../configs/axiosConfig'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    localStorage.getItem('authTokens')
    let [authTokens, setAuthTokens] = useState(null);
    let [user, setUser] = useState(null);

    const navigate = useNavigate();

    let loginUser = async (e) => {
        e.preventDefault();
        try{
            let response = await axios.post('auth/token/', {
                email : e.target.email.value,
                password : e.target.password.value
            })
            console.log(response)
            if (response.status === 200){
                setAuthTokens(response.data)
                setUser(jwtDecode(response.data.access))
                localStorage.setItem('authTokens', JSON.stringify(response.data))
                navigate('/');
            }
        }catch(e){
            alert(e);
        }
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