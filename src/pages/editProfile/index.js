import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/AuthContext'
import { ProfileForm } from './styled';

const EditProfile = () => {
    let { profilePic, getProfilePic } = useContext(AuthContext);

    useEffect(() => {
        getProfilePic();
        },[])

  return (
    <ProfileForm>
    <div>
        <form>
            <div className='profilePic'>
                <p>Foto de perfil</p>
                {profilePic && <img src={profilePic}/>}
                <input type='file'/>
            </div>
            <div>
                <p>Primeiro Nome</p>
                <input placeholder='Primeiro Nome...'/>
            </div>
            <div>
                <p>Último Nome</p>
                <input placeholder='Último Nome...'/>
            </div>
            <div>
                <p>Email</p>
                <input type='email' placeholder='Seu email...'/>
            </div>
            <div>
                <p>Papel</p>
                <select name="tipo" className='custom-select'>
                    <option value="posdoc">Pós Doc.</option>
                    <option value="doutorado">Doutorado</option>
                    <option value="mestrado">Mestrado</option>
                    <option value="bolsista">Bolsista</option>
                </select>
            </div>
        </form>
    </div>
    </ProfileForm>
  )
}

export default EditProfile
