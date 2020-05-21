import React from 'react';
import ContinueButton from './ContinueButton';
import { StyledWelcomeScreen, StyledWelcomeContainer } from './styles/StyledWelcomeScreen';

const WelcomeScreen  = props => {

    return(
        <StyledWelcomeContainer>
            <StyledWelcomeScreen>
                <header>
                    
                </header>
                
                <section>
                    <ContinueButton continue = {props.continue}/>
                </section>

                <footer>

                </footer>

            </StyledWelcomeScreen>
        </StyledWelcomeContainer>
    )
}


export default WelcomeScreen;