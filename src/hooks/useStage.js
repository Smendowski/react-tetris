import { useState, useEffect } from 'react';
import { createStage } from '../gameParams';


export const useStage = (player, resetPlayer) => {
    // createStage - initialize with clear board
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);


    useEffect(() => {
        setRowsCleared(0);

        const sweepRows = newStage =>
        newStage.reduce((ack, row) => {
            if (row.findIndex(cell => cell[0] === 0) === -1) {
                setRowsCleared(previous => previous + 1);
                ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
            return ack;
            }
            ack.push(row);
            return ack;
        }, [])
        

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
                return sweepRows(newStage)
            }


            return newStage;
        };

        setStage(previous => updateStage(previous))
    }, [player, resetPlayer]);
    //[player]
    // we have to specify it inside, cause we are using it as dependencies
    

    return [stage, setStage, rowsCleared];
};