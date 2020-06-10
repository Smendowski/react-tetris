import { useState, useEffect, useCallback} from 'react';

/**
 * @desc game parameters' state management
 * @param rowsCleared how many rows has been cleared by the player
 * @return getters and setters for score, rows, level
 */
export const useGameStats = (rowsCleared) => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    const linePoints = [ 40, 100, 300, 1200];

    // useCallback usage to avoid infinite Loop
    const calculateScore = useCallback(() => {
        if(rowsCleared > 0){
            // Original Tetris  formula to calculate score
            setScore(previous => previous + linePoints[rowsCleared - 1]
                * (level + 1));
            setRows(previous => previous + rowsCleared);
        } 
    }, [level, linePoints, rowsCleared])

    // useEffect usage to fire off code automatically 
    useEffect(() => {
        calculateScore();
    }, [calculateScore, rowsCleared, score])

    return [score, setScore, rows, setRows, level, setLevel];
}