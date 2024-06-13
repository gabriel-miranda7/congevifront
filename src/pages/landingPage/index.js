import React from 'react';
import Header from '../../components/header';
import { useRef, useEffect, useState } from 'react';
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
import profa from '../../media/assets/profa.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import WidgetPessoa from '../../components/pessoawidget';

const LandingPage = () => {


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ayxdo4q', 'template_wlu9d1i', e.target, 'y_jsgtk_DJxCK4xV5')
        .then((result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!");
        }, (error) => {
          console.log(error.text);
          alert("Ocorreu um erro ao enviar a mensagem.");
        });
  
      e.target.reset(); // Reseta o formulário após o envio
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
        <img className='wave' src={wave}/>
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

     <LandingSobre>
     <section id='quemsomos'>
            <h2>Nossa equipe</h2>
            <Carousel       className='carrossel'
                            showArrows={true}
                            showThumbs={false}
                            infiniteLoop={true}
                            showStatus={false}
                            showIndicators={false}
                            centerMode={true}
                            centerSlidePercentage={25} // Ajuste para definir o tamanho dos slides
                            swipeScrollTolerance={50} // Tolerância para permitir a rolagem do swipe
                            
                        >
                        
            <div className="slide">
                <WidgetPessoa nome={"Dra. Ana Paula Pinho"} descricao={"Coordenadora do PPAC"} imagem={profa}/>
            </div>
            <div className="slide">
                <WidgetPessoa nome={"teste"} descricao={"Coordenadora do PPAC"} imagem={profa}/>
            </div>
            </Carousel>
        </section>
     </LandingSobre>

     <LandingContato>
     <section id='contato'>
        <h2>Entre em contato conosco!</h2>
        <div className='container'>
          
          <form onSubmit={sendEmail}>
            <div className='inputsuperior'>
              <input placeholder='Nome' type='text' name='name' required/>
              <input placeholder='Telefone com DDD' type='text' name='phone' required/>
            </div>
              <input placeholder='Seu E-Mail' type='email' name='email' required/>
              <textarea placeholder='Sua mensagem...' name='message' required/>
              <button>Enviar</button>
          </form>
        </div>
     </section>
     </LandingContato>
    </>
  )
}

export default LandingPage;
