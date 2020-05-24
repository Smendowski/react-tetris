import styled from 'styled-components';
import logo from '../../img/logo.jpeg';

export const StyledWelcomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
`;

export const StyledWelcomeScreen = styled.div`

    header{
        position: fixed;
        width: 100%;
        height: 30vh;
    }

    section{
        position: fixed;
        bottom: 0;
        width: 100vw;
        height: 60vh;
        text-align: center;
        padding: 30px;
    }

    footer{
        position: fixed;
        bottom: 0;
        width:  100vw;
        height: 10vh;
        text-align: center;
    }

    .logoContainer{
        width: 400px;
        min-height: 100%;
        max-width:100%;
        max-height:100%;
        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;
        background: url(${logo}) #000;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    p{
        color: white;
    }
`;