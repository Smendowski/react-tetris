// Importing React and styled button
import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';


const StartButton = ({ callback, content }) => (
    // Acccesing values taken from props and packaging in a stylized component
    <StyledStartButton onClick={callback}>{content}</StyledStartButton>
)

export default StartButton;