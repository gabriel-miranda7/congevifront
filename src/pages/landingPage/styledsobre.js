import styled from 'styled-components';

export const LandingSobre = styled.div `
    font-family: Legacy;
    width: 100vw;
    height: 80vh;
    padding: 2% 0 2% 0;
    background-color: #357960;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    h2{
        font-size: 38px;
    }

    .carrossel {
        width: 90vw;

        /* Definindo um por vez no carrossel em dispositivos menores */
        @media (max-width: 768px) {
            width: 100vw; /* Ocupa toda a largura */
            overflow-x: auto;
            display: flex !important; /* Forçando o display flex */
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch; /* Suaviza o scroll no iOS */
        }

        /* Estilizando os itens do carrossel */
        .slide {
            flex: 0 0 auto;
            width: 85vw; /* Ajusta a largura dos itens para adicionar margens */
            margin: 0 2.5vw; /* Margem horizontal para espaçar os itens */
            scroll-snap-align: start;
        }
    
    }

    
   


`;