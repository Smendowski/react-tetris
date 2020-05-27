import styled from 'styled-components';

export const StyledContinueButton = styled.button`
    margin: 50px;
    margin-bottom: 10px;
    margin-top: 10px;
    background: ${props => (props.color === 'green' ?
        '#92cd41' : '#e76e55')};
    display: inline-block;
    position: relative;
    text-align: center;
    font-size: 30px;
    padding: 20px;
    text-decoration: none;
    color: white;
    font-family: 'Press Start 2P', cursive;
    font-size: 1rem;
    box-shadow: ${props => (props.color === 'green' ?
        'inset -4px -4px 0px 0px #4aa52e;' :
        'inset -4px -4px 0px 0px #8c2022')};

    &:hover, &:focus {
        background: ${props => (props.color === 'green' ?
            '#76c442' : '#ce372b')};
        box-shadow: ${props => (props.color === 'green' ?
        'inset -6px -6px 0px 0px #4aa52e' :
        'inset -6px -6px 0px 0px #8c2022')};
    }

    &:active{
        box-shadow: ${props => (props.color === 'green' ?
        'inset 4px 4px 0px 0px #4aa52e' :
        'inset 4px 4px 0px 0px #8c2022')};
    }

    &:before, &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: content-box;
        
    }

    &:before{
        top: -6px;
        left: 0;
        border-top: 6px black solid;
        border-bottom: 6px black solid;
    }

    &:after{
        left: -6px;
        top: 0;
        border-left: 6px black solid;
        border-right: 6px black solid;
    }
`