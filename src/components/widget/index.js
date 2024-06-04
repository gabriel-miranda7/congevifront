import React from 'react';
import { WidgetStyle } from './styled';
import { Link } from 'react-router-dom'; 

const Widget = ({titulo, imagem, descricao}) => {


  return (
    <WidgetStyle>
        <div className='widget'>
          <h3>{titulo}</h3>
          <img src={imagem}/>
          <p>{descricao}</p>
        </div>
    </WidgetStyle>
  )
}

export default Widget;
