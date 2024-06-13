import styled from 'styled-components';

export const WidgetStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 0 0 10% 10%;
  min-height: 15vh;
  padding-top: 2%;
  

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif, Helvetica, sans-serif;
    font-size: 40%;
    font-weight: 400;
    text-align: center; 
    margin: 5px;
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
    width: 160px;
    height: 160px;
    transition: transform 0.4s ease;
  }

  img:hover {
    transform: scale(1.1);
  }

  .titlesection {
    width: 90%;
    word-wrap: break-word;
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
    padding: 10px 2vw;
    border-radius: 10px;
    height: fit-content;
    background-color: rgba(173, 187, 218, 0.2);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    min-height: 450px;
    transition: background-color 0.5s ease;
  }

  .widget:hover{
    background-color: rgba(173, 187, 218, 0.5);;
  }

  @media (max-width: 1200px) {
    .widget {
      width: 40vw;
    }

    h3 {
      font-size: 3vw;
    }
  }

  @media (max-width: 668px) {
    .widget {
      width: 80vw;
      padding: 1px 2vw;
    }

    h3 {
      font-size: 8vw;
    }
  }

`;