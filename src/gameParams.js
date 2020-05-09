export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
        // create Array holding rows, 
        // for each row, create Array inside with cells
        // 0 represents a clean cell, nothing inside
        // ready for mapping 
        new Array(STAGE_WIDTH).fill(0, 'clear')
    )


    