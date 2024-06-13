import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AuthContext from '../../context/AuthContext';
import axios from '../../configs/axiosConfig';
import logo from '../../media/logo/ConGeVi_logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderContainer } from './styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser, getUserData } = useContext(AuthContext);
  const [profilePic, setProfilePic] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  let lastScrollTop = 0;

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth', block: 'center'});
  };
  const scrollToSectionMobile = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth', block: 'start'});
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/\s+/g, ''); // Remove spaces
  };

  const menuItems = (
    <List>
      {['Início', 'Pesquisa', 'Quem somos', 'Contato'].map((text) => (
        <ListItem button key={text} onClick={() => {
          scrollToSectionMobile(normalizeText(text));
          toggleDrawer(false)();
        }}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      {user && (
        <ListItem button onClick={() => {
          navigate('/index/dash');
          toggleDrawer(false)();
        }}>
          <ListItemText primary="Dashboard" />
        </ListItem>
      )}
    </List>
  );

  
  return (
    <HeaderContainer>
      <AppBar className={isHidden ? 'appBar hidden' : 'appBar'}>
        <Toolbar className="navBar">
          <img className='logo' src={logo}/>
          <div className='barraNav menuDesktop'>
            <nav onClick={()=> scrollToSection('inicio')}>Início</nav>
            <nav onClick={()=> scrollToSection('pesquisa')}>Pesquisa</nav>
            <nav onClick={()=> scrollToSection('quemsomos')}>Quem somos</nav>
            <nav onClick={()=> scrollToSection('contato')}>Contato</nav>
            {user ? <nav onClick={()=> navigate('/index/dash')}>Dashboard</nav> : ''}
          </div>
          <div className='barraNav menuMobile'>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer className='drawer' anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
              {menuItems}
            </Drawer>
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
