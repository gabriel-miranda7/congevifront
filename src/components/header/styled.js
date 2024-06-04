import styled from 'styled-components';

export const HeaderContainer = styled.div `
    display: block;
    height: 8vh; 
    width: 100%; 

    .logo{
        width: 60px;
        opacity: 0.7;
    }

    .logoutIcon {
        margin-right: 3vw;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .logoutIcon:hover{
        transform: scale(1.2);
    }

    .button {
        font-family: Legacy;
        border: 1px solid white;
        color: white;
        padding: 0.5% 1% 0.5% 1%;
        background-color: transparent;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 600;

        transition: background-color 0.3s ease, color 0.3s ease;
    }   

    .button:hover {
        color: green;
        background-color: white;
    }   

    .navBar{
        display: flex;
        justify-content: space-around;
        margin: 0 5% 0 5%;
    }

    .barraNav{
        display: flex;
        justify-content: end;
        width: 80%;
    }

    nav{
        font-family: Legacy;
        font-size: 18px;
        padding: 0 1% 0 1%;
        cursor: pointer;
        transition: color 0.2s ease;
    }

    nav:hover{
        color: rgba(255,255,255,0.7);
    }

    .appBar {
        background-color: #357960;
        height: 8vh;
        box-shadow: none;
        justify-content: center;
    }

`;