import React from 'react';
import { StyledStage } from './styles/StyledStage';
import Cell from './Cell';

/**
 * @desc stage functional component
 * @param object stage - state and parameters of current stage
 * @return rendered stage ( filled with cells ) according to 
 * stage's properties given in props
 */
const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;