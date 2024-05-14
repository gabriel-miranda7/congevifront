import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AuthContext from '../../context/AuthContext';
import axios from '../../configs/axiosConfig';
import LogoutIcon from '@mui/icons-material/Logout';
import { HeaderContainer } from './styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser, getUserData } = useContext(AuthContext);
  const [profilePic, setProfilePic] = useState('');

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
          <div className='barraNav'>
            <nav onClick={()=> navigate('/')}>Página inicial</nav>
            <nav onClick={()=> navigate('/about')}>Quem somos</nav>
            <nav onClick={()=> navigate('/contact')}>Contato</nav>
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
              Fazer Login
            </button>
          )}
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
};

export default Header;
