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

    .profilePic{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 30vh;
        
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