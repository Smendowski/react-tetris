import styled from 'styled-components';
import { device }  from '../../device';

export const StyledTetrisContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background:  #000;
    background-size: cover;
    overflow-x: hidden;
    margin-left: auto;
    margin-right: auto;
`;
export const StyledTetris = styled.div`
    display: block;
    float: left;
    padding: 40px;
    margin: 0 auto;
    margin-left: auto;
    margin-right: auto;

    aside {
        width: 100%
        display: block;
        padding: 0 20px;


        @media ${device.mobileL}{
            max-width: 350px;
            margin-left: auto;
            margin-right: auto;
        }

        @media ${device.tablet}{
            min-width: 350px;
            margin-left: auto;
            margin-right: auto;
        }

        @media ${device.laptop}{
            min-width: 350px;
        }
    }

    @media ${device.mobileL}{
        width: 100%;
    }

    @media ${device.tablet}{
        width: 50%;
        display: flex;
        align-items: flex-start;
    }
`;