
// useState and useCallback - standart React Hooks
import { useState, useCallback } from 'react';
import { BLOCKS, randomBlock } from '../blocks';
import { STAGE_WIDTH } from '../gameParams';

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


    return [player, updatePlayerPosition, resetPlayer];
}
