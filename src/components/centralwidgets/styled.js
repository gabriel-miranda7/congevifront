import styled from 'styled-components';

export const CentralWidgetsBox = styled.div `
    display: flex;
    border: 1px solid black;
    justify-content: space-evenly;
    max-width: 100%;
    margin-top: 2%;

    .widget {
        font-family: Legacy;
        padding-inline: 2vw;
        padding-top: 10px;
        padding-bottom: 20px;
        border-radius: 30px;
        background-color: rgba(173, 173, 173, 0.4);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
`;