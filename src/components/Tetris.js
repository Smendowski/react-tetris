import React, { useState } from 'react';

// Stage Creator
import { createStage, detectCollision } from '../gameParams';

// Styles
import { StyledTetrisContainer, StyledTetris} from './styles/StyledTetris';

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from  '../hooks/useStage';
import { useInterval } from '../hooks/useInterval';
import { useGameStats } from '../hooks/useGameStats'


// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';


const Tetris = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    // Custom Hook usage
    const [player, updatePlayerPosition, resetPlayer, rotatePlayer] = usePlayer();
    // resetPlayer, needed to be accessed by useStage
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = 
        useGameStats(rowsCleared);

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
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }

    const drop = () => {
        // Increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10){
            setLevel(previous => previous + 1);
            // Increase speed formula
            setDropTime(1000 / (level + 1) + 200);
        }


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

    // Stop interval when palyer presses downkey
    const dropPlayer = () => {
        setDropTime(null);
        drop();
    }

    // Start interval again after user release downkey
    const keyUp = ({keyCode}) => {
        if (!gameOver){
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200);
            }
        }
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
            } else if (keyCode === 38) {
                // Adding only rightwise rotation. top arrow
                rotatePlayer(stage, 1);
            }
        }

    }

    useInterval(() => {
        drop();
    }, dropTime)


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
                <StartButton callback={startGame}/>
            </aside>
            </StyledTetris>
        </StyledTetrisContainer>
    );
};


export default Tetris;