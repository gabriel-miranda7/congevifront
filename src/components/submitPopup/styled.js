import styled from 'styled-components';

export const Popup = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;

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
        transition: border-color 0.3s ease; 
    }

    select:focus {
        border-color: #007bff; 
    }

    
`;
