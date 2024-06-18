import React from 'react';
import Header from '../../components/header';
import { useState } from 'react';
import { LandingSobre } from './styledsobre';
import { LandingTop } from './styledtop';
import wave from '../../media/assets/wave.svg';
import escola from '../../media/assets/escola.svg'
import pessoas from '../../media/assets/pessoas.svg'
import pessoasabraco from '../../media/assets/pessoasabraco.svg'
import vinculos from '../../media/assets/vinculos.svg'
import { LandingPesquisa } from './styledpesquisa';
import Widget from '../../components/widget';
import { LandingContato } from './styledcontato';
import emailjs from 'emailjs-com';
import WidgetPessoa from '../../components/pessoawidget';



const LandingPage = () => {
    const [messageStatus, setMessageStatus] = useState('');

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ayxdo4q', 'template_wlu9d1i', e.target, 'y_jsgtk_DJxCK4xV5')
        .then((result) => {
          setMessageStatus('Mensagem enviada com sucesso!');
        }, (error) => {
          console.log(error.text);
          setMessageStatus('Ocorreu um erro ao enviar a mensagem.');
        });
  
      e.target.reset(); // Reseta o formulário após o envio
      }

      const handlePhoneInput = (e) => {
        const { value } = e.target;
        e.target.value = value.replace(/\D/g, '');
      }
    

    
  return (
    <>
      <Header/>
      <LandingTop id='inicio'>
      <section>
        <div className='textocentral'>
          <h1>ConGeVi</h1>
          <h2>Somos um grupo de pesquisa em Contexto de Trabalho,<br/> Gestão de pessoas & Vínculos organizacionais composto<br/> por cientistas sociais, professores e alunos.</h2>
        </div>
        <img className='wave' alt='green wave' src={wave}/>
        <div className="pixel-animation">
          {[...Array(100)].map((_, i) => <span key={i} className="pixel"></span>)}
        </div>
      </section>
      </LandingTop>
      
      <LandingPesquisa id='pesquisa'>
        <section>
          <div className='header'>
          <h2>O que nós pesquisamos?</h2>
          </div> 
          <div className='widgets'>
            <Widget titulo={"Evasão Universitária"} imagem={escola} descricao={"Estudantes abandonam os estudos antes de concluírem seus cursos. Um desafio complexo, influenciado por diversos fatores."}/>
            <Widget titulo={"Cultura Organizacional"} imagem={pessoasabraco} descricao={"O conjunto de valores e práticas compartilhadas por membros de uma organização."}/>
            <Widget titulo={"Gestão de pessoas"} imagem={pessoas} descricao={"A prática de administrar o capital humano de uma organização, envolve recrutamento e desenvolvimento dos colaboradores."}/>
            <Widget titulo={"Vínculos Organizacionais"} imagem={vinculos} descricao={"Relações entre funcionários e a empresa, incluindo contratos de trabalho e comprometimento emocional e redes."}/>
          </div>
          <h3 className='more'>e muito mais!</h3>
        </section>  
      </LandingPesquisa>

    

     <LandingContato>
     <section id='contato'>
        <h2>Entre em contato conosco!</h2>
        <div className='container'>
          <form onSubmit={sendEmail}>
            <div className='inputsuperior'>
              <input placeholder='Nome' type='text' name='name' required/>
              <input placeholder='Telefone com DDD' type='text' name='phone' onInput={handlePhoneInput} required/>
            </div>
              <input placeholder='Seu E-Mail' type='email' name='email' required/>
              <textarea placeholder='Sua mensagem...' name='message' required/>
              {!messageStatus && <button>Enviar</button>}
              {messageStatus && <p>{messageStatus}</p>}
          </form>
        </div>
     </section>
     </LandingContato>
    </>
  )
}

export default LandingPage;
