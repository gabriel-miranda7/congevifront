import { createContext, useState, useEffect } from 'react'
import axios from '../configs/axiosConfig'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null);
    let [userData, setUserData] = useState([])
    let [loading, setLoading] = useState(true)

    const navigate = useNavigate();

    let getUserData = async () => {
        console.log(authTokens.access)
        try{
            let response = await axios.get('auth/getmydata/', {
                headers: {
                    Authorization : `Bearer ${authTokens.access}`
                    }
                })
                if(response.status === 200){
                    return response.data;
                }else if (response.statusText === 'Unauthorized'){
                    logoutUser();
                }
            } catch(e){
                console.log(e)
                return null;
            }
        }

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
                navigate('/index/dash');
            }
        }catch(e){
            alert(e);
        }
    }

    let updateToken = async () => {
        console.log("method called!")
        try{
            if (!authTokens || !authTokens.refresh) {
                logoutUser();
                return;
            }
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
        } finally {
            setLoading(false);
        }

        if (loading){
            setLoading(false)
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
        authTokens:authTokens,
        userData:userData,
        getUserData:getUserData,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }

    useEffect(()=> {

        if (loading){
            updateToken()
        }

        let time = 1000 * 60 * 5
        let interval = setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, time)
        return () => clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData}>
            { loading ? <p>Carregando...</p> : children }
        </AuthContext.Provider>
    )
}