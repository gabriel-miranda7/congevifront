import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <>
        <div>Olá Mundo</div>
        <form>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Senha'/>
        </form>
    </>
  )
}

export default LoginPage