import React from 'react';
import { CentralWidgetsBox } from './styled';
import { Link } from 'react-router-dom'; 

const CentralWidgets = () => {

  const calculateNextFriday = () => {
    let today = new Date();
    let dayOfWeek = today.getDay();
    let daysUntilFriday = dayOfWeek === 5 ? 7 : 5 - dayOfWeek;
    let nextFriday = new Date(today.getTime() + daysUntilFriday * 24 * 60 * 60 * 1000);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = nextFriday.toLocaleDateString('pt-BR', options);
    formattedDate = formattedDate.replace(/^\w/, (c) => c.toUpperCase());
    return formattedDate;
  }

  return (
    <CentralWidgetsBox>
        <div className='widget'>
          <h3>Próxima reunião</h3>
          {calculateNextFriday()}
        </div>
      <div className='widget'>
        <h3>Projetos ConGeVi</h3>
        <Link to="/index/arquivos">Ver arquivos</Link>
      </div>
      <div className='widget'>
        <h3>Calendário</h3>
        <Link to="/index/calendario">Ir até Calendário</Link>
      </div>
    </CentralWidgetsBox>
  )
}

export default CentralWidgets;
