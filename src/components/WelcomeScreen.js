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
                        Do you want to continue or do you prefer to start a new one? </p>
                        <ContinueButton color="red" content = {`${ContinueTitle}`} action = {props.continue}/>
                        <ContinueButton color="green" content = {`${StartNewGameTitle}`} action = {props.startNew}>
                            <button className="eightbit-btn"></button>
                        </ContinueButton>
                    </div>
                ) : (
                    <div>
                        <p>Welcome! Press Start to see game screen.</p>
                        <ContinueButton color="green" content = {`${StartGameTitle}`} action = {props.startNew}/>
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