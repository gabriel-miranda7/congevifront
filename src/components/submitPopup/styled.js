import styled from 'styled-components';

export const Popup = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    padding-top: 1%;

    width: 40%; 
    height: 40%;
    background-color: rgb(247, 245, 245); 
    border-radius: 20px;
    z-index: 9999; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    
    h2 {
        margin-bottom: 5%;
    }

    select {
        cursor: pointer;
        width: 10vw;
        padding: 12px;
        font-size: 16px; 
        border-radius: 10px; 
        appearance: none;
        background-color: #ffffff;
        border: 1px solid #ccc; 
        outline: none; 
        transition: border-color 0.3s ease, background-color 0.2s ease; 
    }

    select:hover {
        background-color: #ebe8e8;
    }

    select:focus {
        border-color: #007bff; 
    }

    button {
        font-family: Legacy;
        margin-top: 30px;
        border: none;
        color: white;
        outline: none;
        padding: 18px 0;
        background-color: #4eb04e;
        cursor: pointer;
        font-size: 26px;
        border-radius: 4px;
        font-weight: 600;
        width: 30%;
        transition: background 0.5s ease;
        margin-bottom: 40px;
    }

    button:hover {
        background-color: rgb(0, 63, 0);
    }

    .cancel{
        transform: scale(1.2);
        position: absolute;
        left: 3%;
        top: 5%;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    .cancel:hover {
        transform: scale(1.3);
    }
    
`;
