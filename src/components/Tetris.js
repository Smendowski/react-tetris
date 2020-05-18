import React, { useState } from 'react';

// Stage Creator
import { createStage, detectCollision } from '../gameParams';

// Styles
import { StyledTetrisContainer, StyledTetris} from './styles/StyledTetris';

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from  '../hooks/useStage';


// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';


const Tetris = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    // Custom Hook usage
    const [player, updatePlayerPosition, resetPlayer] = usePlayer();
    // resetPlayer, needed to be accessed by useStage
    const [stage, setStage] = useStage(player, resetPlayer);

    console.log('re-render');
    
    // function takes parameter - direction
    // Responsible to move player left or right
    const movePlayer = (direction) => {
        if(!detectCollision(player, stage, {x: direction, y: 0})){
            updatePlayerPosition({x:direction, y:0});
        }
    }

    const startGame = () => {
        // Reset 
        setStage(createStage());
        resetPlayer();
        setGameOver(false);
    }

    const drop = () => {
        if(!detectCollision(player, stage, {x: 0, y:1})){
            // Droping element down, we increase y axisi coordinate by one
            updatePlayerPosition({x:0, y:1, collided: false})
        } else {
            if(player.position.y < 1){
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPosition({ x:0, y:0, collided: true});
        }
    }


    const dropPlayer = () => {
        drop();
    }

    const move = ({ keyCode }) => {
        // We dont want to move if the game is over
        if (!gameOver) {
            // Move block to the left
            if (keyCode === 37){
                movePlayer(-1);
            // Move block to the right
            } else if (keyCode === 39) {
                movePlayer(1);
            // Move block down - dropDown    
            } else if (keyCode === 40) {
                dropPlayer();
            }
        }

    }


    return (
        <StyledTetrisContainer role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
            <Stage stage={stage}/>
            <aside>
                {gameOver ? (
                    <Display gameOver={gameOver} text="Game Over" />
                ) : (
                <div>
                    <Display text="Score"/>
                    <Display text="Rows"/>
                    <Display text="Level"/>
                </div>)}
                <StartButton callback={startGame}/>
            </aside>
            </StyledTetris>
        </StyledTetrisContainer>
    );
};


export default Tetris;