import { useState, useEffect } from 'react';
import { createStage } from '../gameParams';


export const useStage = (player, resetPlayer) => {
    // createStage - initialize with clear board
    const [stage, setStage] = useState(createStage());


    useEffect(() => {
        const updateStage = previousStage => {
            // Clear the stage from the previous render
            const newStage = previousStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)), 
            );

            // Draw the block, draw new stage in this render
            // Looping trough the block structure, and checking
            // which block are empty, which are occupied
            player.block.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0){
                        newStage[y + player.position.y][x + player.position.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ];
                    }
                });
            });

            // Check colision before returning new  Stage
            if(player.collided){
                resetPlayer();
            }


            return newStage;
        };

        setStage(previous => updateStage(previous))
    }, [player, resetPlayer]);
    //[player]
    // we have to specify it inside, cause we are using it as dependencies
    

    return [stage, setStage];
};