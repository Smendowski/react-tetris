import styled from 'styled-components';
import { device } from '../../device';

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeat(
        ${props => props.width}, 1fr
    );
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 25vw;
    background: #111;

    @media ${device.mobileL}{
        min-width: 290px;
        margin: 0 0 20px 0;
        margin-left: auto;
        margin-right: auto;

        grid-template-rows: repeat(
            ${props => props.height},
            calc(290px / ${props => props.width})
        );
        grid-template-columns: repeat(
            ${props => props.width}, 1fr
        );
    }

    @media ${device.tablet}{
        min-width: 35vw;
        margin: 0 0 20px 0;

        grid-template-rows: repeat(
            ${props => props.height},
            calc(35vw / ${props => props.width})
        );
        grid-template-columns: repeat(
            ${props => props.width}, 1fr
        );
    }

    @media ${device.laptop}{
        min-width: 25vw;
        margin: 0 0 20px 0;

        grid-template-rows: repeat(
            ${props => props.height},
            calc(25vw / ${props => props.width})
        );
        grid-template-columns: repeat(
            ${props => props.width}, 1fr
        );
    }
`