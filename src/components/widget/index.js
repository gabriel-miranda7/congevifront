import React from 'react';
import { WidgetStyle } from './styled';

const Widget = ({ titulo, imagem, descricao }) => {
  return (
    <WidgetStyle>
      <div className='widget'>
        <div className='titlesection'>
          <h3>{titulo}</h3>
        </div>
        <img src={imagem} alt={titulo} />
        <div className='textsection'>
          <p>{descricao}</p>
        </div>
      </div>
    </WidgetStyle>
  );
};

export default Widget;