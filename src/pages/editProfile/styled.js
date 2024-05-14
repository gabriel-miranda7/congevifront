import styled from 'styled-components';

export const ProfileForm = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: Legacy;
    
    form{
        display: flex;
        padding: 10px 10px 50px 10px;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 0 0 50px 50px;
        background-color: white;
        width: 80vw;
        height: 80vh;
    }

    img{
        width: 100px;
    }

    .inputFoto{
        margin-top: 2%;
    }

    .profilePic{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 30vh;
    }

    .button {
        font-family: Legacy;
        margin-top: 30px;
        border: 3px solid green;
        color: green;
        outline: none;
        padding: 18px 0;
        background-color: white;
        cursor: pointer;
        font-size: 26px;
        border-radius: 4px;
        font-weight: 600;
        width: 100%;
        justify-self: center;
        transition: background-color 0.3s ease, color 0.3s ease;
        margin-bottom: 40px;
    }   
    .button:hover{
        background-color: green;
        color: white;
    }



    input:not([type='file']) {
        cursor: text;
        border: 2px solid #4eb04e;
        border-radius: 50px;
        width: 20vw;
        height: 5vh;
        padding: 5px 35px;
        font-size: 18px;
    }
    input[type='email'] {
        cursor: pointer;
        border: 2px solid black;
        border-radius: 50px;
        width: 20vw;
        height: 5vh;
        padding: 5px 35px;
        font-size: 18px;
    }   

`;