import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { BLOCKS } from '../blocks';

/**
 * @desc cell functional component,
 * @param object type - tetromino type
 * @return rendered and styled cell based on tetromino properties
 */
const Cell = ({ type }) => (
    <StyledCell type={type} color={BLOCKS[type].color}/>
)

// React memo to optimize performance - render only if cell has changed
export default React.memo(Cell);