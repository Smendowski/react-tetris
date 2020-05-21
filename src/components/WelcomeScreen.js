import React from 'react';
import ContinueButton from './ContinueButton';


const WelcomeScreen  = props => {

    return(
        <ContinueButton continue = {props.continue}/>
    )
}


export default WelcomeScreen;