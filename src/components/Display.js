import React from 'react';

import { StyledDisplay } from './styles/StyledDisplay';

/**
 * @desc display functional component
 * @param bool gameOver - indicates if the game is over
 * @param string text - the message to be displayed
 * @return  rendered and styled display
 */
const Display = ({ gameOver, text}) => (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
)

export default Display;