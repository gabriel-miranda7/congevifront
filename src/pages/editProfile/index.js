import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import { ProfileForm } from './styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../configs/axiosConfig';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const navigate = useNavigate();
    let { getUserData, authTokens } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    let [profilePic, setProfilePic] = useState('');
    let [profilePicUrl, setProfilePicUrl] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [role, setRole] = useState('');
    let [username, setUsername] = useState('');
    const [isActionBlocked, setIsActionBlocked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          const userData = await getUserData();
          if (userData !== null) {
            setUserData(userData);
          }
        };

        fetchData();
      }, []);

    useEffect(() => {
    if (userData) {
        setProfilePic(userData.profile_pic_url);
        setProfilePicUrl(userData.profile_pic_url);
        setFirstName(userData.first_name);
        setLastName(userData.last_name);
        setEmail(userData.email);
        setUsername(userData.username);
        setRole(userData.role);
      }
    }, [userData]);

    function alertEmailNotChangable(){
        if (!isActionBlocked) {
            setIsActionBlocked(true);
            toast.error('Você não pode alterar seu email.', {
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
    }

    function handleRoleChange(event) {
        setRole(event.target.value);
    }


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(file);
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePicUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const submitData = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            if(profilePic !== profilePicUrl){
                formData.append('profile_pic', profilePic); 
            }
            formData.append('username', username);
            formData.append('first_name', firstName);
            formData.append('last_name', lastName);
            formData.append('role', role);  
            const response = await axios.put('auth/updateuser/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${authTokens.access}`
                }
            });
            navigate('/index/dash');
        } catch (error) {
            console.log(error)
        }
    };

  return (
    <div style={{backgroundColor: '#4eb04e', height: '100vh'}}>
        <ToastContainer/>
    <ProfileForm>
    <div>
        <form onSubmit={submitData}>
            <div className='profilePic'>
                <p>Foto de perfil</p>
                {profilePic && <img src={profilePicUrl}/>}
                <input type='file' className='inputFoto' accept="image/*" onChange={(e) => handleFileChange(e)}/>
            </div>
            <div>
                <p>Nome de usuário</p>
                <input onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Seu usuário...'/>
            </div>
            <div>
                <p>Primeiro Nome</p>
                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder='Primeiro Nome...'/>
            </div>
            <div>
                <p>Último Nome</p>
                <input onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder='Último Nome...'/>
            </div>
            <div>
                <p>Email</p>
                <input onClick={alertEmailNotChangable} value={email} type='email' placeholder='Seu email...' readOnly />
            </div>
            <div>
                <p>Papel</p>
                <select name="tipo" className='custom-select' value={role} onChange={handleRoleChange}>
                    <option value="posdoc">Pós Doc.</option>
                    <option value="doutorado">Doutorado</option>
                    <option value="mestrado">Mestrado</option>
                    <option value="bolsista">Bolsista</option>
                </select>
            </div>
            <button className='button'>Enviar</button>
        </form>
    </div>
    </ProfileForm>
    </div>
  )
}

export default EditProfile
