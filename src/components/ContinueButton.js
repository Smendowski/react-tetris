import React from 'react';
import { StyledContinueButton } from './styles/StyledContinueButton';

/**
 * @desc continue-button functional component
 * @param string color - color rgb value
 * @param function action - callback function
 * @param string content - button content
 * @return rendered and styled continue button
 */
const ContinueButton = ({color, action, content}) => {
    return <StyledContinueButton color = { color } onClick = { action }>
        { content }
        </StyledContinueButton>
}
export default ContinueButton;