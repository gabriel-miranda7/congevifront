import React, { useContext, useEffect, useState } from 'react'
import { AppBar, Toolbar } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AuthContext from '../../context/AuthContext';
import axios from '../../configs/axiosConfig'
import LogoutIcon from '@mui/icons-material/Logout';
import { HeaderContainer } from './styled';

const Header = () => {
    let {authTokens, logoutUser, getProfilePic, profilePic} = useContext(AuthContext);
    useEffect(() => {
        getProfilePic();
        },[])

  return (
    <HeaderContainer>
        <React.Fragment>
            <AppBar className='appBar'>
                <Toolbar>
                {profilePic ? (
                            <img src={profilePic} alt="Profile Pic" style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: 'auto', marginRight: '3vw', cursor: 'pointer' }} />
                        ) : (
                            <AccountCircleIcon sx={{ marginLeft: 'auto', transform: 'scale(1.8)', marginRight: '3vw', cursor: 'pointer' }} />
                        )}
                <LogoutIcon onClick={logoutUser} className='logoutIcon'/>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    </HeaderContainer>
  )
}

export default Header
