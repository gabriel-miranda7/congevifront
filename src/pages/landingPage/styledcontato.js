import styled from 'styled-components';

export const LandingContato = styled.div `
    font-family: Legacy;
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3vh;
    font-size: 28px;
    color: white;
    background-color: #357960;

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
        border-radius: 10px;
        margin: 0 15px 0 15px;
        width: 20vw;
        border: 0px solid black;
        padding: 15px;
    }

    input[type='email']{
        width: 30vw;
        margin-bottom: 5%;
        border: 0px solid black;
    }

    button {
        cursor: pointer;
        font-family: Legacy;
        padding: 10px 15% 10px 15%;
        margin-top: 5%;
        background-color: white;
        color: black;
        border: 1px solid black;
        border-radius: 20px;

        transition: color 0.3s ease, background-color 0.3s ease;
    }

    button:hover {
        color: white;
        background-color: #357960;
    }

    textarea {
        padding: 5px;
        width: 90%;
        border-radius: 10px;
        height: 15vh;
        resize: none;
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

    @media (max-width: 1200px) {
    input { 
        width: 25vw;
    }
  }

  @media (max-width: 668px) {
    .inputsuperior {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    input {
        width: 60vw;
        margin: 5%;
    }
    input[type='email']{
        width: 60vw;
        margin-bottom: 10%;

    }
  }    



`;