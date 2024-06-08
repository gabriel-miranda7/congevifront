import styled from 'styled-components';

export const LandingContato = styled.div `
    font-family: Legacy;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2% 0 2% 0;
    font-size: 28px;

    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-60%) rotate(30deg);
             
            opacity: 0;
        }
        80% {
            transform: translateX(10%) rotate(-5deg);
            opacity: 1;
        }

    }

    img {
        width: 20vw;
        
    }


    form {
        display: flex;
        width: fit-content;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    input {
        font-size: 13px;
        font-weight: 600;
        background-color: transparent;
        border-radius: 10px;
        margin: 0 15px 0 15px;
        width: 15vw;
        border: 1px solid black;
        padding: 15px;
    }

    input[type='email']{
        width: 30vw;
        margin-bottom: 5%;
    }

    textarea {
        padding: 5px;
        width: 90%;
        border-radius: 10px;
        height: 15vh;
        resize: vertical;
    }

    .inputsuperior {
        display: flex;
        width: 100%;
        margin-bottom: 5%;
        justify-content: space-between;
    }

    .container{
        display: flex;
        margin-top: 5%;
        justify-content: space-around;
        align-items: center;
    }

    



`;