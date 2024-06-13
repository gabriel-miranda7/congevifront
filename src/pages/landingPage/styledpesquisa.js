import styled from 'styled-components';

export const LandingPesquisa = styled.div`
    font-family: Legacy;
    font-size: 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
 

    h3 {
        margin-bottom: 3%;
    }

    h2 {
        margin-top: 0;
        margin-bottom: 15px;
    }

    .more{
        font-size: 24px;
        margin-top: 5%;
    }

    .header{
        display: flex;
        margin: 5% 0 0 3%;
        align-items: center;
    }

    .widgets{
        display: flex;
        margin: 0 1% 0 1%;
        justify-content: space-around;
    }

  @media (max-width: 1200px) {
    .widgets {
      display: grid;
      margin-top: 20px;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }

  @media (max-width: 668px) {
    .widgets {
      display: grid;
      margin-top: 20px;
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
    }
    .header{
      margin-top: 7%;
    }
    h3 {
        margin-bottom: 8%;
    }
  }

   
`;
