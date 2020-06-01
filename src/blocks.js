export const BLOCKS = {
    // 0 - clean cell, nothing inside, 0 equals nothind on the grid
    0: {shape: [[0]], color: '0,0,0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '0, 229, 250',
    },

    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '36, 95, 223',
    },

    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '223, 172, 36',
    },

    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: '223, 217, 36',
    },
    
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '48, 211, 56',
    },

    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '132, 61, 198',
    },

    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '227, 78, 78',
    },
}

export const randomBlock = () => {
    const allowedOptions = 'IJLOSTZ';
    const randomChoice = allowedOptions[Math.floor(Math.random(0) * allowedOptions.length)];
    
    return BLOCKS[randomChoice];
}
