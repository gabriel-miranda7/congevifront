import React from 'react';
import { WidgetPessoaStyle } from './styled';

const WidgetPessoa = ({ nome, imagem, descricao }) => {
  return (
    <WidgetPessoaStyle>
      <div className='widget'>
        <div className='titlesection'>
          <h3>{nome}</h3>
        </div>
        <img src={imagem} alt={nome}/>
        <div className='textsection'>
          <p>{descricao}</p>
        </div>
      </div>
    </WidgetPessoaStyle>
  );
};

export default WidgetPessoa;