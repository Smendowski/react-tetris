import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

/**
 * @desc startButton functional component
 * @param function callback - function to be invoked onClick event
 * @param string content - button's content
 * @return rendered and styled start button
 */
const StartButton = ({ callback, content }) => (
    // Acccesing values taken from props and packaging in a stylized component
    <StyledStartButton onClick={callback}>{content}</StyledStartButton>
)

export default StartButton;