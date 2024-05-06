import React, { useContext } from 'react';
import styles from './loginstyles.module.css';
import logo from './img/logo-removebg-preview.png';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { loginUser, user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const alreadyLogged = (e) => {
    e.preventDefault();
    navigate('/index/dash');
  }

  return (
    <div className={styles.corpo}>
      <img className={styles.imagem} src={logo} alt="" />
      <form onSubmit={loginUser} className={styles.loginContainer}>
        <h2 className={styles.login}>Login</h2>
        {user ? <h3>Você já está logado!</h3> : ''}
        {user ? ( 
          <div>
            <div className={styles.campos}>
        </div>
        <button onClick={alreadyLogged} className={styles.button}>Entrar</button>
        <button onClick={logoutUser} className={styles.button}>Logar como outro usuário</button>
          </div>
        ) : ( 
          <div>
            <div className={styles.campos}>
          <div className={styles.inputField}>
            <input type='email' name='email' placeholder='Email' />
            <span className={styles.nome}>Email</span>
          </div>
          <div className={styles.inputField}>
            <input type='password' name='password' placeholder='Senha' />
            <span className={styles.nome}>Senha</span>
          </div>
        </div>
        <button className={styles.button}>Enviar</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
