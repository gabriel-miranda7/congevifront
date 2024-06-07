import styled from 'styled-components';

export const WidgetStyle = styled.div `
    display: flex;
    justify-content: space-evenly;
    max-width: 100%;
    margin-bottom: 5px;
    border-radius: 0 0 10% 10%;
    padding: 2% 0 2% 0;
    
    p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif, Helvetica, sans-serif;
        font-size: 16px;
    }

    h3 {
        padding: 2%;
    }

    img {
        width: 15vw;
        height: 25vh;
        padding-bottom: 2%;
        transition: transform 0.4s ease;
    }

    img:hover {
        transform: scale(1.2);
    }

    .widget {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-family: Legacy;
        padding-inline: 2vw;
        padding: 10px 15px 3vw 15px;
        border-radius: 30px;
        width: 23vw;
        height: 50vh;
        background-color: rgba(173, 173, 173, 0.05);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
`;