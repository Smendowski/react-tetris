// Importing React, and built-in hooks
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { StyledTetrisContainer, StyledTetris} from './styles/StyledTetris';
import { createStage, detectCollision } from '../gameParams';

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from  '../hooks/useStage';
import { useInterval } from '../hooks/useInterval';
import { useGameStats } from '../hooks/useGameStats'

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

// Tetris Component takes loadLocalStorage as a prop
const Tetris = ({ loadLocalStorage }) => {

    // Declaration and initialization - using custom Hooks
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    // Declaring as 'let' variable, because during the game some parameters must be
    //modified - e.g. when retrieving data from the local storage
    let [player, updatePlayerPosition, resetPlayer, rotatePlayer, setPlayer] = usePlayer();
    let [stage, setStage, rowsCleared] = useStage(player, resetPlayer);

    const [score, setScore, rows, setRows, level, setLevel] = 
        useGameStats(rowsCleared);

    // Original formula to calculate block's drop time
    const defaultDropTime = (1000 / (level + 1) + 200);


    const startGame = () => {
        console.log(loadLocalStorage);
        // If there is any content added to the local storage 
        // the user can continue the game and has expressed a
        // desire to continue - restore the previous state of the game
        if (loadLocalStorage && !gameOver){
            // Retrieving data from local storage and setting components' state
            setStage(JSON.parse(localStorage.getItem("stageStored")));
            setDropTime(JSON.parse(localStorage.getItem("dropTimeStored")));
            setPlayer(JSON.parse(localStorage.getItem("playerStored")));
            setGameOver(JSON.parse(localStorage.getItem("gameOverStored")));
            setScore(JSON.parse(localStorage.getItem("scoreStored")));
            setRows(JSON.parse(localStorage.getItem("rowsStored")));
            setLevel(JSON.parse(localStorage.getItem("levelStored")));
            rowsCleared = JSON.parse(localStorage.getItem("rowsClearedStored"));
            console.log(player.block);
        // create fresh component and start game from scratch
        } else {
            setStage(createStage());
            setDropTime(1000);
            resetPlayer();
            setGameOver(false);
            setScore(0);
            setRows(0);
            setLevel(0);
        }        
    }

    const resetGame = () => {
        // Start game from scratch
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }

    // Moving block - Left / Right
    const movePlayer = (direction) => {
        // If there is no collision detected then move and
        // update block's position in the main stage
        if(!detectCollision(player, stage, {x: direction, y: 0})){
            updatePlayerPosition({x:direction, y:0});
        }
    }

    // Moving block - down
    const drop = (dropTime) => {
        // Increase the level when player has cleared 10 rows
        if (rows > (level + 1) * 10){
        setLevel(previous => previous + 1);
        // Update speed
        setDropTime(dropTime);
        }
        if(!detectCollision(player, stage, {x: 0, y:1})){
            // While dropping element down - y axis incrementation
            updatePlayerPosition({x:0, y:1, collided: false})
        } else {
            // If there is no any free space at the top of the stage
            // the game has been lost
            if(player.position.y < 1){
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPosition({ x:0, y:0, collided: true});
        }
    }

    const dropPlayer = () => {
        // hold the default game clock while pressing the "down" key
        // to avoid the double fall effect of the block
        setDropTime(null);
        drop(defaultDropTime);
        console.log(player.block);
    }


    // Start interval again after user release a downkey
    const keyUp = ({keyCode}) => {
        if (!gameOver){
            if (keyCode === 40) {
                setDropTime(defaultDropTime);
            }
        }
    }
    
    // Take keyCode and make a movement
    const move = ({ keyCode }) => {
        // Stopm moving if the game is lost
        if (!gameOver) {
            // Move block to the left
            if (keyCode === 37){
                movePlayer(-1);
            // Move block to the right
            } else if (keyCode === 39) {
                movePlayer(1);
            // Drop down the block    
            } else if (keyCode === 40) {
                dropPlayer();
            // Block rightwise rotation
            } else if (keyCode === 38) {
                rotatePlayer(stage, 1);
            }
        }
    }

    // Custom Hook usage - every 'dropTime' value passed as a dependency to
    // useInterval, drop the block and store components' state to the local
    // storage
    useInterval(() => {
        drop(defaultDropTime);
        localStorage.setItem("dropTimeStored", JSON.stringify(dropTime));
        localStorage.setItem("stageStored", JSON.stringify(stage));
        localStorage.setItem("playerStored", JSON.stringify(player));
        localStorage.setItem("rowsClearedStored", JSON.stringify(rowsCleared));
        localStorage.setItem("scoreStored", JSON.stringify(score));
        localStorage.setItem("rowsStored", JSON.stringify(rows));
        localStorage.setItem("levelStored", JSON.stringify(level));
        localStorage.setItem("gameOverStored", JSON.stringify(gameOver));
    }, dropTime)

    
    // return Component - JSX syntax
    return (
        <StyledTetrisContainer role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp = {keyUp}>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                    <div>
                        <Display text={`Score: ${score}`}/>
                        <Display text={`Rows: ${rows}`}/>
                        <Display text={`Level: ${level}`}/>
                    </div>)}
                    <StartButton content="Start Game" callback={startGame}/>
                    <StartButton content="Reset Game" callback={resetGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisContainer>
    );
};

export default Tetris;