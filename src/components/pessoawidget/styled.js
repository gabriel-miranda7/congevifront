import styled from 'styled-components';

export const WidgetPessoaStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 0 0 10% 10%;
  min-height: 15vh;
  padding-top: 2%;
  

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 5%;
    text-align: center; 
    line-height: 1.5;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  h3 {
    font-size: 1.5vw;
  }

  img {
    transform: scale(0.5);
    border-radius: 100%;
  }

  .titlesection {
    width: fit-content;
    text-align: center;
  }

  .textsection {
    display: flex;
    height: auto;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
  }

  .widget {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: Legacy;
    width: 18vw;
    border-radius: 10px;
    height: fit-content;
    background-color: #2F6A54;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    min-height: 450px;
    transition: background-color 0.5s ease;
  }

  .widget:hover{
    background-color: rgba(173, 187, 218, 0.5);;
  }

  @media (max-width: 768px) {
    .widget {
      width: 30vw;
    }

    h3 {
      font-size: 3vw;
    }
  }

  

`;