import React, { useState, useEffect, useContext } from 'react'
import { MuralContainer } from './styled'
import axios from '../../configs/axiosConfig'
import AuthContext from '../../context/AuthContext';
import placeholderpic from '../../media/placeholder/placeholderpic.jpg'
import SubmitPopup from '../submitPopup';
import SendIcon from '@mui/icons-material/Send';
import { ToastContainer, toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import 'react-toastify/dist/ReactToastify.css';

const Mural = () => {

    let {authTokens} = useContext(AuthContext);
    let {user} = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState('activities');
    const [postText, setPostText] = useState('');
    const [activities, setActivities] = useState([]);
    const [muralPopupOpen, setMuralPopupOpen] = useState(false);
    const [isActionBlocked, setIsActionBlocked] = useState(false);


    const toggleOption = (option) => {
        if (selectedOption !== option) {
            setSelectedOption(option);
        }
    };

    const delActivitie = async (thingId) => {
        try {
            let response = await axios.delete(`mural/del/${thingId}`, {
                headers: {
                    Authorization: `Bearer ${authTokens.access}`
                }
            });
            if (response.status === 204) {
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }
    

    const changeMuralPopup = () => {
        if (postText === ''){
            if (!isActionBlocked) {
                setIsActionBlocked(true);
                toast.error('Erro! A atividade está vazia.', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    onClose: () => setIsActionBlocked(false) // Define isActionBlocked como false quando o toast é fechado
                });
            }
        } else {
            setMuralPopupOpen(!muralPopupOpen);   
        }
    }
    

    const submitForm = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                let activities_response = await axios.get('mural/activitie', {
                    headers: {
                        Authorization : `Bearer ${authTokens.access}`
                    }
                })
                if (activities_response.status === 200){
                    setActivities(activities_response.data)
                }
            } catch(e){
                console.log(e);
            }
        }

        fetchAllData();
    }, [])

    return (
        <MuralContainer>
            <ToastContainer />
          <>
          {muralPopupOpen && <SubmitPopup content={postText} muralPopupClose={changeMuralPopup} />}
                <h1>Mural</h1>
            <div className='muralToggle'>
                <p>
                <span
                    style={{ cursor: 'pointer', color: selectedOption === 'activities' ? '#4eb04e' : 'black' }}
                    onClick={() => toggleOption('activities')}
                >
                    Atividades
                </span>
                <span
                    style={{ cursor: 'pointer', color: selectedOption === 'warns' ? '#4eb04e' : 'black' }}
                    onClick={() => toggleOption('warns')}
                >
                    Avisos
                </span>
                </p>
            </div>
            <form onSubmit={submitForm}>
                {user.staff || selectedOption === 'activities' ? 
                (<div className='send'> 
                    <input className='inputPost' placeholder='Diga o que está acontecendo membro ConGeVi!'
                    type='textbox' maxLength={50} value={postText} onChange={(e) => setPostText(e.target.value)}/> 
                    <SendIcon onClick={changeMuralPopup} className='plane'/> 
                </div>) : ''}
            </form>
            <div>
            {selectedOption === 'activities' && (
                        <div className='activity-box'>
                            {activities.map(activity => (
                                <div className='activity' key={activity.id}>
                                    <div>
                                        {activity.author_profile_picture !== null ? 
                                        <img className='user-picture' src={activity.author_profile_picture}/> :
                                        <img className='user-picture' src={placeholderpic}/>
                                        }
                                    </div>
                                    <div className='activity-content'>
                                        {activity.type === 'defesa_tese' && <p style={{color:'#de2d16', fontSize:'20px'}}>Defesa</p>}
                                        {activity.type === 'submissao' && <p style={{color:'#20ab0a', fontSize:'20px'}}>Submissão</p>}
                                        {activity.type === 'aniversario' && <p style={{color:'#d9a300', fontSize:'20px'}}>Aniversário!🥳</p>}
                                        {activity.type === 'outro' && <p style={{color:'#bf36cf', fontSize:'20px'}}>Outro</p>}
                                        {activity.type === 'noticia' && <p style={{color:'#9E023B', fontSize:'20px'}}>Notícia</p>}
                                        
                                        <p>{activity.author_first_name + ' ' + activity.author_last_name + ' disse,'}</p>
                                        <p className='textbox'>{activity.content}</p>
                                    </div>
                                    {user['user_id'] === activity.author || user.staff ? <DeleteIcon onClick={() => delActivitie(activity.id)} className='trash'/> : ''}
                                </div>
                            ))}
                        </div>
                    )}
            </div>
          </>
        </MuralContainer>
      );
    };

export default Mural
