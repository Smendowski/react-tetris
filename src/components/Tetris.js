import React from 'react';

// Stage Creator
import { createStage } from '../gameParams';

// Styles
import { StyledTetrisContainer, StyledTetris} from './styles/StyledTetris';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';


const Tetris = () => {




    return (
        <StyledTetrisContainer>
            <StyledTetris>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text="Score"/>
                    <Display text="Rows"/>
                    <Display text="Level"/>
                </div>
                <StartButton/>
            </aside>
            </StyledTetris>
        </StyledTetrisContainer>
    );
};


export default Tetris;