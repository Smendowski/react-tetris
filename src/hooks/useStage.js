import { useState, useEffect } from 'react';
import { createStage } from '../gameParams';

/**
 * @desc stage management, updating and sweeping rows
 * @param player current player
 * @param resetPlayer callback to load new player plock if previous
 * one has been succesfully docked/merged into stage 
 * @return stage and it's setter and amount of cleared rows
 */
export const useStage = (player, resetPlayer) => {
    // Create stage and initialize with clear board
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {
        setRowsCleared(0);

        /**
         * @desc erases every fully filled row from current stage and adds new
         *  empty row at the top of the stage - erasing row visual illusion
         */
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
        
        /**
         * @desc updates stage's state
         * @param previousStage 
         * @return updated stage
         */
        const updateStage = previousStage => {
            // Clear the stage from the previous render
            const newStage = previousStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)), 
            );
            // Draw the block and a new stage in this render
            // Looping trough the block structure, and checking
            // which blocks are empty, which are occupied
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

    return [stage, setStage, rowsCleared];
};