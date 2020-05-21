import styled from 'styled-components';
import logo from '../../img/logo.jpeg';

export const StyledWelcomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    background-size: cover;
`;

export const StyledWelcomeScreen = styled.div`
    display: block;
    float: left;
    width: 100vw;
    height: 100vh;

    header{
        position: fixed;
        width: 100%;
        height: 300px;
    }

    article{
        height: 50vh;
        color: white;
    }

    footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 20vh;
        background: black;
    }
    
    .logoContainer{
        width: 400px;
        height: 400px;
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
`;