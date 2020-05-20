import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { BLOCKS } from '../blocks';


const Cell = ({ type }) => (
    <StyledCell type={type} color={BLOCKS[type].color}/>
)

export default Cell;