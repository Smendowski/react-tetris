import styled from 'styled-components';
import { device }  from '../../device';

export const StyledTetrisContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background:  #000;
    background-size: cover;
    overflow-x: hidden;
`;
export const StyledTetris = styled.div`
    display: block;
    float: left;
    padding: 40px;
    margin: 0 auto;
    margin-left: auto;
    margin-right: auto;
    max-width: 900px;

    aside {
        width: 100%
        display: block;
        padding: 0 20px;

        @media ${device.mobileS}{
            min-width: 300px;
            margin-left: auto;
            margin-right: auto;
        }

        @media ${device.mobileL}{
            min-width: 300px;
            margin-left: auto;
            margin-right: auto;
        }

        @media ${device.tablet}{
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
        }

        @media ${device.laptop}{
            min-width: 350px;
        }
    }

    @media ${device.tablet}{
        display: flex;
        align-items: flex-start;
    }
`;