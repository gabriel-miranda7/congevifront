import React, { useState, useEffect, useContext } from 'react'
import { MuralContainer } from './styled'
import axios from '../../configs/axiosConfig'
import AuthContext from '../../context/AuthContext';
import placeholderpic from '../../media/placeholder/placeholderpic.jpg'

const Mural = () => {

    let {authTokens} = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState('activities');
    const [activities, setActivities] = useState([]);

    const toggleOption = () => {
    setSelectedOption(prevOption =>
      prevOption === 'activities' ? 'warns' : 'activities'
        );
    };

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
          <>
                <h1>Mural</h1>
            <div className='muralToggle'>
                <p>
                <span
                    style={{ cursor: 'pointer', color: selectedOption === 'activities' ? '#4eb04e' : 'black' }}
                    onClick={toggleOption}
                >
                    Atividades
                </span>
                <span
                    style={{ cursor: 'pointer', color: selectedOption === 'warns' ? '#4eb04e' : 'black' }}
                    onClick={toggleOption}
                >
                    Avisos
                </span>
                </p>
            </div>
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
                                        {activity.type === 'aniversario' && <p style={{color:'#d9a300', fontSize:'20px'}}>Aniversário!!🥳</p>}
                                        <p>{activity.author_first_name + ' ' + activity.author_last_name + ' disse,'}</p>
                                        <p>{activity.content}</p>
                                    </div>
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
