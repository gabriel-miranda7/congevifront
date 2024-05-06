import React, { useContext, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Popup } from './styled'
import axios from '../../configs/axiosConfig';
import AuthContext from '../../context/AuthContext';

const SubmitPopup = ({content, muralPopupClose}) => {
  let { authTokens } = useContext(AuthContext);
  let [option, setOption] = useState('submissao');

  const submitData = async () => {
    try {
      let response = await axios.post('mural/activitie/', {
        type : option,
        content : content
      }, {
        headers : {
          Authorization: `Bearer ${authTokens.access}`
        }
      })
      if (response.status === 201){
        muralPopupClose();
        window.location.reload();
      }
    } catch(e){
      console.log(e);
    }
  }

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  }

  return (
    <Popup>
      <ClearIcon className='cancel' onClick={muralPopupClose} />
        <h2>Como você definiria sua nova Atividade?</h2>
      <select name="tipo" className='custom-select' value={option} onChange={handleOptionChange}>
        <option value="submissao">Submissão</option>
        <option value="defesa_tese">Defesa</option>
        <option value="aniversario">Aniversário</option>
        <option value="noticia">Notícia</option>
        <option value="outro">Outro</option>
      </select>
      <button onClick={submitData}>Postar!</button>
    </Popup>
  )
}

export default SubmitPopup
