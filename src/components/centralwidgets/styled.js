import styled from 'styled-components';

export const CentralWidgetsBox = styled.div `
    display: flex;
    justify-content: space-evenly;
    max-width: 100%;
    margin-bottom: 5px;
    background-color: rgba(173, 173, 173, 0.10);
    border-radius: 0 0 10% 10%;
    padding: 2% 0 2% 0;

    .widget {
        font-family: Legacy;
        padding-inline: 2vw;
        padding-top: 10px;
        padding-bottom: 20px;
        border-radius: 30px;
        width: 20%;
        background-color: rgba(173, 173, 173, 0.15);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
`;