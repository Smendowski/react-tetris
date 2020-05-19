
// useState and useCallback - standart React Hooks
import { useState, useCallback } from 'react';
import { BLOCKS, randomBlock } from '../blocks';
import { STAGE_WIDTH, detectCollision } from '../gameParams';

export const usePlayer = () =>{
    const [player, setPlayer ] = useState({
        position: {x:0, y:0},
        block: BLOCKS[0].shape,
        collided: false,
    });
    // Longest form:
    // const playerState = useState();
    // const player = playerState[0];
    // cosnt setPlayer = playerState[1];

    const rotate = (tetromino, direction) => {
        // direction >0 right rotation
        // TODO: rotation, matrix transposition.
        const rotatedTetromino = tetromino.map((_, index) =>
            tetromino.map(column => column[index]),);
        // Reverse each row to get a rotaded tetromino
        if ( direction > 0) return rotatedTetromino.map(row => row.reverse());

        return rotatedTetromino.reverse();
    }

    const rotatePlayer = (stage, direction) => {
        const playerClone = JSON.parse(JSON.stringify(player));
        playerClone.block = rotate(playerClone.block, direction);

        // Basic checker - if we collided, we have to
        // cancel rotation process and by dint of offset,
        // separate block and collided object with space
        const position = playerClone.position.x;
        let offset = 1;
        while(detectCollision(playerClone, stage, {x: 0, y:0})){
            playerClone.position.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > playerClone.block[0].length){
                // If block after rotation 
                rotate(playerClone.tetromino, -direction);
                playerClone.position.x = position;
                return;
            }
        }
        setPlayer(playerClone);
    }

    const updatePlayerPosition = ({x, y, collided}) => {
        setPlayer(previous => ({
            ...previous,
            position: {x: (previous.position.x += x), y: (previous.position.y += y)},
            collided,
        }))
    }

    // Starting player's block position
    const resetPlayer = useCallback(() => {
        setPlayer({
            // Top Middle positioning
            position: {x: STAGE_WIDTH / 2 - 2, y: 0},
            block: randomBlock().shape,
            collided: false,
        })
    }, [])


    return [player, updatePlayerPosition, resetPlayer, rotatePlayer];
}
