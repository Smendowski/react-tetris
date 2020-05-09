import { useState } from 'react';
import { randomBlock } from '../blocks';

export const usePlayer = () =>{
    const [player, setPlayer ] = useState({
        position: {x:0, y:0},
        block: randomBlock().shape,
        collided: false,
    })
    // Longest form:
    // const playerState = useState();
    // const player = playerState[0];
    // cosnt setPlayer = playerState[1];

    return [player];
}