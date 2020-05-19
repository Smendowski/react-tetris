import { useState, useEffect, useCallback} from 'react';

export const useGameStats = rowsCleared => {
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
    // Use callback, takes dependency array



    // useEffect usage to fire off code automatically 
    useEffect(() => {
        calculateScore();
    }, [calculateScore, rowsCleared, score])

    return [score, setScore, rows, setRows, level, setLevel];
}