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