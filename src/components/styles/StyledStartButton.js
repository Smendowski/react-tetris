import styled from 'styled-components';

export const StyledStartButton = styled.button`
$button-background: #92CD41;
    box-sizing: border-box;
    margin-top: 10px;
    padding: 20px;
    min-height: 30px;
    width: 100%;
    border: none;
    color: white;
    background: #333;
    font-family: 'Press Start 2P', cursive;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    box-shadow: inset -4px -4px 0px 0px #444;

    &:hover, &:focus {
        background: #333;
        box-shadow: inset -6px -6px 0px 0px #222;
    }

`