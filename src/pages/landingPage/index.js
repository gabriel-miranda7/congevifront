import React from 'react';
import Header from '../../components/header';
import Mural from '../../components/mural';
import CentralWidgets from '../../components/centralwidgets';
import { LandingPageDiv } from './styled';
import { LandingTop } from './styledtop';
import wave from '../../media/assets/wave.svg';
import { LandingPesquisa } from './styledpesquisa';
import Widget from '../../components/widget';

const LandingPage = () => {

  return (
    <LandingPageDiv>
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
            <Widget titulo={"Evasão Universitária"} descricao={"Estudantes abandonam os estudos antes de concluírem seus cursos. Um desafio complexo, influenciado por diversos fatores como financeiros, acadêmicos e pessoais."}/>
            <Widget titulo={"Cultura Organizacioanal"} descricao={"O conjunto de valores, crenças e práticas compartilhadas por membros de uma organização. Molda comportamentos, influencia a tomada de decisões e define a identidade única de uma empresa."}/>
            <Widget titulo={"Gestão de pessoas"} descricao={"A prática de administrar o capital humano de uma organização. Envolve recrutamento, desenvolvimento e motivação dos colaboradores para alcançar os objetivos da empresa."}/>
          </div>
          e mais!
        </section>  
      </LandingPesquisa>
    </LandingPageDiv>
  )
}

export default LandingPage;
