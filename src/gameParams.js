// Consts to define stage size in cells
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/**
 * @desc creates an Array holdng rows, for each row, create another Array with empty cells
 * @return new stage filled with empty cells
 */
export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

/**
 * @desc detects if player collides after movement
 * @param {*} player - current player's block
 * @param {*} stage  - actual stage where the player is placed
 * @param {*} positionObject - x and y movement value 
 * @return bool - collision or not
 */
export const detectCollision = (player, stage, {x: afterMovementX, y: afterMovementY}) => {
    for(let y = 0; y < player.block.length; y += 1){
        for(let x = 0; x < player.block[y].length; x += 1){
            if(player.block[y][x] !== 0){
                // Check if after movement we are still in the stage's Heigth
                if(!stage[y + player.position.y + afterMovementY] || 
                // Check if after movement we are still in the stage's Width    
                !stage[y + player.position.y + afterMovementY][x + player.position.x + afterMovementX] ||
                // Check if the cell we are moving to is not empty    
                stage[y + player.position.y + afterMovementY][x + player.position.x + afterMovementX][1] !== 'clear'
                ){
                    return true;
                }
            }
        }
    }
};