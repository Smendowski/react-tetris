import React from 'react';
import { StyledContinueButton } from './styles/StyledContinueButton';

const ContinueButton = props => {
    return <StyledContinueButton color = { props.color } onClick = { props.action }>
        { props.content }
        </StyledContinueButton>
}
export default ContinueButton;