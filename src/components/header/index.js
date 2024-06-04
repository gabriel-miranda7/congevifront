import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AuthContext from '../../context/AuthContext';
import axios from '../../configs/axiosConfig';
import logo from '../../media/logo/ConGeVi_logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import { HeaderContainer } from './styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser, getUserData } = useContext(AuthContext);
  const [profilePic, setProfilePic] = useState('');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth', block: 'end'});
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      if (userData) {
        setProfilePic(userData.profile_pic_url);
      }
    };

    fetchData();
  }, [getUserData]);

  
  return (
    <HeaderContainer>
      <AppBar className="appBar">
        <Toolbar className="navBar">
          <img className='logo' src={logo}/>
          <div className='barraNav'>
            <nav onClick={()=> scrollToSection('inicio')}>Início</nav>
            <nav onClick={()=> scrollToSection('pesquisa')}>Pesquisa</nav>
            <nav onClick={()=> scrollToSection('about')}>Quem somos</nav>
            <nav onClick={()=> scrollToSection('contato')}>Contato</nav>
            {user ? <nav onClick={()=> navigate('/index/dash')}>Dashboard</nav> : ''}
          </div>
          {user ? (
            <>
              {profilePic ? (
                <img
                  src={profilePic}
                  onClick={() => navigate('/index/editprofile')}
                  alt="Profile Pic"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    marginLeft: 'auto',
                    marginRight: '3vw',
                    cursor: 'pointer'
                  }}
                />
              ) : (
                <AccountCircleIcon
                  onClick={() => navigate('/index/editprofile')}
                  sx={{
                    marginLeft: 'auto',
                    transform: 'scale(1.8)',
                    marginRight: '3vw',
                    cursor: 'pointer'
                  }}
                />
              )}
              <LogoutIcon onClick={logoutUser} className="logoutIcon" />
            </>
          ) : (
            <button onClick={() => navigate('/auth')} className="button">
              Login
            </button>
          )}
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
};

export default Header;
