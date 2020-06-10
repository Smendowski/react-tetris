// BLOCKS defines various tetrominos placed on the stage.
// Each block (object, tetromino inside BLOCKS) must be
// represented by a square matrix shape (to ease rotation
// and detect collision) and it's color.

export const BLOCKS = {
    // 0 - clear cell, empty place on the stage. 
    0: { shape: [ [0] ], color: '0,0,0' },

    // 0 - represents black, empty cell in the matrix 
    //     shape structure
    // !0 value - represents colorful, filled cell in
    //     the matrix shape structure
    I: { shape: [ [0, 'I', 0], [0, 'I', 0], [0, 'I', 0] ],
        color: '0, 229, 250' },

    J: { shape: [ [0, 'J', 0], [0, 'J', 0], ['J', 'J', 0] ],
        color: '36, 95, 223' },

    L: { shape: [ [0, 'L', 0], [0, 'L', 0], [0, 'L', 'L'] ],
        color: '223, 172, 36' },

    O: { shape: [ ['O', 'O'], ['O', 'O'] ],
        color: '223, 217, 36' },
    
    S: { shape: [ [0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0] ],
        color: '48, 211, 56' },

    T: { shape: [ ['T', 'T', 'T'], [0, 'T', 0], [0, 0, 0] ],
        color: '132, 61, 198' },

    Z: { shape: [ ['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0] ],
        color: '227, 78, 78' },

    X: { shape: [ ['X',0], ['X','X'] ],
        color: '252, 3, 240' },

    W: { shape: [ ['W', 0, 'W'],['W', 'W', 'W'],[0, 0, 0] ],
        color: '252, 136, 3' }
}

/**
 * @desc generate a random block - tetromino
 * @return block object - shape + colour 
 */
export const randomBlock = () => {
    const allowedOptions = 'IJLOSTZXW';
    const randomChoice = allowedOptions[Math.floor(Math.random(0) * allowedOptions.length)];
    
    return BLOCKS[randomChoice];
}
