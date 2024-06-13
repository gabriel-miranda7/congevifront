import React from 'react';
import Header from '../../components/header';
import { useRef, useEffect, useState } from 'react';
import { LandingSobre } from './styledsobre';
import { LandingTop } from './styledtop';
import wave from '../../media/assets/wave.svg';
import notebook from '../../media/assets/notebook.svg';
import escola from '../../media/assets/escola.svg'
import pessoas from '../../media/assets/pessoas.svg'
import pessoasabraco from '../../media/assets/pessoasabraco.svg'
import vinculos from '../../media/assets/vinculos.svg'
import { LandingPesquisa } from './styledpesquisa';
import Widget from '../../components/widget';
import { LandingContato } from './styledcontato';

const LandingPage = () => {


  return (
    <>
      <Header/>
      <LandingTop id='inicio'>
      <section>
        <div className='textocentral'>
          <h1>ConGeVi</h1>
          <h2>Somos um grupo de pesquisa em Contexto de Trabalho,<br/> Gestão de pessoas & Vínculos organizacionais composto<br/> por cientistas sociais, professores e alunos.</h2>
        </div>
        <img src={wave}/>
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
      <section id='about'>
        <h2>Sobre nós</h2>
        <p>Ana Paula Moreno Pinho <br/>Coordenadora do PPAC e Gestora do grupo</p>
      </section>
     </LandingSobre>

     <LandingContato>
     <section id='contato'>
        <h2>Entre em contato conosco!</h2>
        <div className='container'>
          <img src={notebook}></img>
          <form>
            <div className='inputsuperior'>
              <input placeholder='Nome' type='text'/>
              <input placeholder='Telefone com DDD' type='text'/>
            </div>
              <input placeholder='E-Mail' type='email'/>
              <textarea placeholder='Sua mensagem...'/>
              <button>Enviar</button>
          </form>
        </div>
     </section>
     </LandingContato>
    </>
  )
}

export default LandingPage;
