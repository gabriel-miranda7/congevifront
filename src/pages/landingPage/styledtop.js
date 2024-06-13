import styled from 'styled-components';

export const LandingTop = styled.div`
    font-family: Legacy;
    color: white;
    width: 100vw;

    section {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        background-color: #357960;
        width: 100vw;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-top: 2%;
    }

    h1 {
        z-index: 999;
        font-size: 90px;
        margin-bottom: 15px;
        animation: slideInFromTop 0.8s ease-out forwards;
    }

    h2 {
        z-index: 999;
        font-size: 35px;
        margin-bottom: 0;
        line-height: 1.5;
        animation: slideInFromTop 0.8s ease-out forwards;
    }

    img {
        width: 100vw;
        animation: fadeIn 1s ease-out forwards;
    }

    .textocentral {
        margin-top: 5%;
    }

    @keyframes slideInFromTop {
        0% {
            transform: translateY(-60%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }


    .pixel-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .pixel {
        position: absolute;
        width: 3px;
        height: 3px;
        background-color: #2A604C;
        opacity: 0.7;
        animation: moveUp 1s linear infinite;
    }

    @keyframes moveUp {
        0% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-10vh) scale(1);
            opacity: 0;
        }
    }

    .pixel:nth-child(10n+1) { left: 10%; animation-duration: 8s; }
    .pixel:nth-child(10n+2) { left: 20%; animation-duration: 12s; }
    .pixel:nth-child(10n+3) { left: 30%; animation-duration: 9s; }
    .pixel:nth-child(10n+4) { left: 40%; animation-duration: 10s; }
    .pixel:nth-child(10n+5) { left: 50%; animation-duration: 11s; }
    .pixel:nth-child(10n+6) { left: 60%; animation-duration: 9s; }
    .pixel:nth-child(10n+7) { left: 70%; animation-duration: 8s; }
    .pixel:nth-child(10n+8) { left: 80%; animation-duration: 12s; }
    .pixel:nth-child(10n+9) { left: 90%; animation-duration: 10s; }
    .pixel:nth-child(10n+10) { left: 100%; animation-duration: 11s; }
`;
