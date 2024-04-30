import { createContext, useState, useEffect } from 'react'
import axios from '../configs/axiosConfig'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null);
    let [loading, setLoading] = useState(true)

    const navigate = useNavigate();

    let loginUser = async (e) => {
        e.preventDefault();
        try{
            let response = await axios.post('auth/token/', {
                email : e.target.email.value,
                password : e.target.password.value
            })

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

    let updateToken = async () => {
        console.log("method called!")
        try{
            let response = await axios.post('auth/token/refresh/', {
                refresh : authTokens.refresh
            })
            if(response.status === 200){
                setAuthTokens(response.data)
                setUser(jwtDecode(response.data.access))
                localStorage.setItem('authTokens', JSON.stringify(response.data))
            } else{
                logoutUser();
            }
        }catch(e){
            console.log(e);
        }
        
    } 

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/auth')
    }

    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }

    useEffect(()=> {

        let time = 1000 * 60 * 4
        let interval = setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, time)
        return () => clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData}>
            { children }
        </AuthContext.Provider>
    )
}