import React from 'react';
import ContinueButton from './ContinueButton';
import { StyledWelcomeScreen, StyledWelcomeContainer } from './styles/StyledWelcomeScreen';

const WelcomeScreen  = props => {

    const ContinueTitle = "Continue";
    const StartGameTitle = "Start Game";
    const StartNewGameTitle = "StartNewGame"

    return(
        <StyledWelcomeContainer>
            <StyledWelcomeScreen>
                <header>
                    <div className = "logoContainer"/>
                </header>
                <section>
                {props.loadLocalStorage ? (
                    <div>
                        <p>It seems you didn't finish the previous game.
                        Do you want to continue or do you prefer to start a new game? </p>
                        <ContinueButton content = {`${ContinueTitle}`} action = {props.continue}/>
                        <ContinueButton content = {`${StartNewGameTitle}`} action = {props.startNew}/>
                    </div>
                ) : (
                    <div>
                        <p>Welcome! Press Start to see game screen.</p>
                        <ContinueButton content = {`${StartGameTitle}`} action = {props.startNew}/>
                    </div>
                )}
                </section>
                
                <footer>
                    <p>FOOTER APKI</p>
                </footer>

            </StyledWelcomeScreen>
        </StyledWelcomeContainer>
    )
}


export default WelcomeScreen;