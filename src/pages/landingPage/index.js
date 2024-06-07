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
import { LandingPesquisa } from './styledpesquisa';
import Widget from '../../components/widget';
import { LandingContato } from './styledcontato';

const LandingPage = () => {


  return (
    <>
      <Header/>
      <LandingTop>
      <section id='inicio'>
        <div>
          <h1>ConGeVi</h1>
          <h2>Somos um grupo de pesquisadores em<br/>Gestão de Pessoas & Cultura Organizacional<br/>Composto por Cientistas, Professores e Alunos</h2>
        </div>
        <img src={wave}/>
        <div className="pixel-animation">
          {[...Array(100)].map((_, i) => <span key={i} className="pixel"></span>)}
        </div>
      </section>
      </LandingTop>
      
      <LandingPesquisa>
        <section id='pesquisa'>
          <div className='header'>
          <h2>O que nós pesquisamos?</h2>
          </div>
          <div className='widgets'>
            <Widget titulo={"Evasão Universitária"} imagem={escola} descricao={"Estudantes abandonam os estudos antes de concluírem seus cursos. Um desafio complexo, influenciado por diversos fatores como financeiros, acadêmicos e pessoais."}/>
            <Widget titulo={"Cultura Organizacional"} imagem={pessoasabraco} descricao={"O conjunto de valores, crenças e práticas compartilhadas por membros de uma organização. Molda comportamentos, influencia a tomada de decisões e define a identidade única de uma empresa."}/>
            <Widget titulo={"Gestão de pessoas"} imagem={pessoas} descricao={"A prática de administrar o capital humano de uma organização. Envolve recrutamento, desenvolvimento e motivação dos colaboradores para alcançar os objetivos da empresa."}/>
          </div>
          <h3>e mais!</h3>
        </section>  
      </LandingPesquisa>

     <LandingSobre>
      <section id='about'>
        <h2>Sobre nós</h2>
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
