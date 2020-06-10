import { useState, useCallback } from 'react';
import { BLOCKS, randomBlock } from '../blocks';
import { STAGE_WIDTH, detectCollision } from '../gameParams';


/**
 * @desc player state management
 * @return player and it's setter, update position function,
 * reseting and rotating function
 */
export const usePlayer = () =>{
    const [player, setPlayer ] = useState({
        position: {x:0, y:0},
        block: BLOCKS[0].shape,
        collided: false,
    });
    
    /**
     * @desc rotate player's block in the given direction
     * @param tetromino current player block object - shape + color
     * @param direction defines left ( < 0) or right ( > 0) block rotation
     * @return rotated tetromino if direction !== 0
     */
    const rotate = (tetromino, direction) => {
        // Rotation, block square matrix structure transposition
        const rotatedTetromino = tetromino.map((_, index) =>
            tetromino.map(column => column[index]),);
        // Reverse each row to get a rotaded tetromino
        if ( direction > 0) return rotatedTetromino.map(row => row.reverse());

        return rotatedTetromino.reverse();
    }

    /**
     * @desc rotate player block directly on the stage
     * @param stage current game stage
     * @param direction defines left or right block rotation
     * @return roteted tetromino if block does not collide with 
     * stage or others merged tetrominos
     */
    const rotatePlayer = (stage, direction) => {
        const playerClone = JSON.parse(JSON.stringify(player));
        playerClone.block = rotate(playerClone.block, direction);

        // if block has collided, cancel rotation process
        // and by dint of offset, separate block and collided object
        // with space
        const position = playerClone.position.x;
        let offset = 1;
        while(detectCollision(playerClone, stage, {x: 0, y:0})){
            playerClone.position.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > playerClone.block[0].length){
                rotate(playerClone.tetromino, -direction);
                playerClone.position.x = position;
                return;
            }
        }
        setPlayer(playerClone);
    }

    /**
     * @desc updates (sets) player's block position
     * @object block's x and y coordinates and if collided status
     */
    const updatePlayerPosition = ({x, y, collided}) => {
        setPlayer(previous => ({
            ...previous,
            position: {x: (previous.position.x += x), y: (previous.position.y += y)},
            collided,
        }))
    }

    /**
     * @desc resets player block - top middle starting position
     */
    const resetPlayer = useCallback(() => {
        setPlayer({
            position: {x: STAGE_WIDTH / 2 - 2, y: 0},
            block: randomBlock().shape,
            collided: false,
        })
    }, [])


    return [player, updatePlayerPosition, resetPlayer, rotatePlayer, setPlayer];
}
