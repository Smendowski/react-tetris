import React from 'react';
import ContinueButton from './ContinueButton';
import { StyledWelcomeScreen, StyledWelcomeContainer } from './styles/StyledWelcomeScreen';

const WelcomeScreen  = props => {

    return(
        <StyledWelcomeContainer>
            <StyledWelcomeScreen>
                <header>
                    <div className = "logoContainer"/>
                </header>
                <section>
                    <p>It seems you didn't finish the previous game.
                    Do you want to continue or do you prefer to start a new game? </p>
                    <ContinueButton continue = {props.continue}/>
                    
                </section>

                <footer>
                    FOOTER APKI
                </footer>

            </StyledWelcomeScreen>
        </StyledWelcomeContainer>
    )
}


export default WelcomeScreen;