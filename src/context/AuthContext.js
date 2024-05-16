import { createContext, useState, useEffect } from 'react'
import axios from '../configs/axiosConfig'
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie"
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const cookies = new Cookies(); // Create a Cookies instance
    const [user, setUser] = useState(cookies.get('access_token') ? jwtDecode(cookies.get('access_token')) : null);
    const [authTokens, setAuthTokens] = useState(cookies.get('access_token') && cookies.get('refresh_token') ? 
    {'access': cookies.get('access_token'), 'refresh' : cookies.get('refresh_token')} : null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const date = new Date();

    const getUserData = async () => {
        if(authTokens && authTokens.access){
            try {
                const response = await axios.get('auth/getmydata/', {
                    headers: {
                        Authorization: `Bearer ${authTokens.access}`
                    }
                });
                if (response.status === 200) {
                    return response.data;
                } else if (response.statusText === 'Unauthorized') {
                    logoutUser();
                }
            } catch (e) {
                console.log(e);
                return null;
            }
        }
    };

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('auth/token/', {
                email: e.target.email.value,
                password: e.target.password.value
            })

            if (response.status === 200) {
                const accessToken = response.data.access
                const refreshToken = response.data.refresh
                setAuthTokens(response.data)
                if (accessToken) {
                    const decodedToken = jwtDecode(accessToken);
                    setUser(decodedToken);
                }
                    cookies.set("access_token", JSON.stringify(accessToken), {
                        path: '/', expires: new Date(date.getTime() + (60*60*1000)),
                    })
                    cookies.set("refresh_token", JSON.stringify(refreshToken), {
                        path: '/', expires: new Date(date.getTime() + (60*60*1000)),
                    })
                    navigate('/index/dash');
            }
        } catch (e) {
            alert(e);
        }
    };

    const updateToken = async () => {
        try {
            if (!authTokens || !authTokens.refresh) {
                logoutUser();
                return;
            }
    
            const tokenExpiry = new Date(jwtDecode(authTokens.access).exp * 1000);
            const now = new Date();
    
            // Atualizar apenas se o token estiver próximo do vencimento
            if (tokenExpiry - now < 5 * 60 * 1000) { // 5 minutos antes do token expirar
                const response = await axios.post('auth/token/refresh/', {
                    refresh: authTokens.refresh
                });
    
                if (response.status === 200) {
                    const { access, refresh } = response.data;
                    setAuthTokens({ access, refresh });
                    setUser(jwtDecode(access));
                    if (cookies.get('access_token') !== access){
                        cookies.remove('access_token')
                        cookies.set("access_token", JSON.stringify(access), { path: '/', expires: new Date(now.getTime() + (60 * 60 * 1000)) });
                    }
                    if (cookies.get('refresh_token') !== refresh){
                        cookies.remove('refresh_token')
                        cookies.set("refresh_token", JSON.stringify(refresh), { path: '/', expires: new Date(now.getTime() + (60 * 60 * 1000)) });
                    }
                } else {
                    logoutUser();
                }
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };
    
    const logoutUser = () => {
        setUser(null);
        cookies.remove('access_token');
        cookies.remove('refresh_token');
        navigate('/');
    };

    const contextData = {
        user,
        authTokens,
        getUserData,
        loginUser,
        logoutUser,
    };

    useEffect(() => {
        if (loading) {
            updateToken();
        }

        const time = 10 * 60 * 1000;

        const interval = setInterval(() => {
            if (authTokens){
                updateToken();
            }
        }, time);
        return () => clearInterval(interval);

    }, [loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};