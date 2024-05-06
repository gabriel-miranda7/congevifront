import styled from 'styled-components';

export const MuralContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: Legacy;
    
    .user-picture {
        border-radius: 100%;
        width: 60px;
        height: 60px; 
    }

    .activity-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50vw;
    }
    
    .activity-content {
        flex-grow: 1;
        text-align: center;
        margin-left: -5%;
        padding-bottom: 5px;
    }

    .textbox{

    }
    
    .activity {
        display: flex;
        align-items: center;
        background-color: rgba(153, 153, 153, 0.2);
        padding: 10px;
        max-height: 10vh;
        padding-left: 20px;
        border-radius: 40px;
        margin-top: 2vh;
        width: 40vw;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }

    span{
        margin: 10px;
        font-size: 19px;
        cursor: pointer;
        transition: color 0.2s ease;
    }

    .inputPost {
        width: 20vw;
        padding: 5px 12px;
        margin-right: 2%;
        font-size: 14px;
        line-height: 20px;
        color: #24292e;
        vertical-align: middle;
        background-color: #ffffff;
        background-repeat: no-repeat;
        background-position: right 8px center;
        border: 1px solid #e1e4e8;
        border-radius: 6px;
        outline: none;
        box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
        :focus{
                border-color: #0366d6;
                outline: none;
                box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
            }
                
    }

    .send {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .plane{
        cursor: pointer;
    }

    .trash{
        margin-right: 1%;
        cursor: pointer;
    }
`;