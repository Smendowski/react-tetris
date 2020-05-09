import { useState } from 'react';
import { createStage } from '../gameParams';


export const useStage = () => {
    // createStage - initialize with clear board
    const [stage, setStage] = useState(createStage())

    return [stage, setStage];
}