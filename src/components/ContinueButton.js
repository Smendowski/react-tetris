import React from 'react';
import { StyledContinueButton } from './styles/StyledContinueButton';

const ContinueButton = props => {
    return <StyledContinueButton onClick={props.continue}>Continue</StyledContinueButton>
}
export default ContinueButton;