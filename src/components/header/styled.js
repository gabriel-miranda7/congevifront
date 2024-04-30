import styled from 'styled-components';

export const HeaderContainer = styled.div `
    display: block;
    height: 8vh; 
    width: 100%; 

    .logoutIcon {
        margin-right: 3vw;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .logoutIcon:hover{
        transform: scale(1.2);
    }

    .appBar {
        background-color: #4eb04e;
        height: 8vh;
        box-shadow: none;
        justify-content: center;
    }

`;