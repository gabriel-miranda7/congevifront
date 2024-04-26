import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  let {user} = useContext(AuthContext)
  return (
    <>
        <div>Olá Mundo</div>
        <form onSubmit={loginUser}>
            {user ? <p>Você está logado!</p> : ''}
            <input type='email' name='email' placeholder='Email'/>
            <input type='password' name='password' placeholder='Senha'/>
            <button>Enviar</button>
        </form>
    </>
  )
}

export default LoginPage