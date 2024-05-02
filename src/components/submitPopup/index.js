import React from 'react'
import { Popup } from './styled'

const SubmitPopup = () => {
  return (
    <Popup>
        <h2>Como você definiria sua nova Atividade?</h2>
      <select name="tipo" className='custom-select'>
        <option value="submissao">Submissão</option>
        <option value="defesa">Defesa</option>
        <option value="aniversario">Aniversário</option>
        <option value="outro">Outro</option>
    </select>
    <button>Postar!</button>
    </Popup>
  )
}

export default SubmitPopup
