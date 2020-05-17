export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
        // create Array holding rows, 
        // for each row, create Array inside with cells
        // 0 represents a clean cell, nothing inside
        // ready for mapping 
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const detectCollision = (player, stage, {x: afterMovementX, y: afterMovementY}) => {
    for(let y = 0; y < player.block.length; y += 1){
        for(let x = 0; x < player.block[y].length; x += 1){
            // TODO: Check we are inside block cell
            if(player.block[y][x] !== 0){
                // We are in the shape cell
                // TODO: Check if after movement we are still in the stage Heigth
                if(!stage[y + player.position.y + afterMovementY] || 
                // TODO: Check if after movement we are still in the stage Width    
                !stage[y + player.position.y + afterMovementY][x + player.position.x + afterMovementX] ||
                // TODO :Check for collision -> the cell we are moving to is not empty -> value described as 'clear'    
                stage[y + player.position.y + afterMovementY][x + player.position.x + afterMovementX][1] !== 'clear'
                ){
                    return true;
                }
            }
        }
    }
};