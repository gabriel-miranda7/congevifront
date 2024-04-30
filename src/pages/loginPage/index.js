import React, { useContext } from 'react';
import styles from './loginstyles.module.css';
import logo from './img/logo-removebg-preview.png'; // Importe a imagem aqui
import AuthContext from '../../context/AuthContext';

const LoginPage = () => {
  const { loginUser, user } = useContext(AuthContext);


  return (
    <div className={styles.corpo}>
      <img className={styles.imagem} src={logo} alt="" />

      <form onSubmit={loginUser} className={styles.loginContainer}>
        <h2 className={styles.login}>Login</h2>
        {user ? <p>Você está logado!</p> : ''}
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
      </form>
    </div>
  );
}

export default LoginPage;
