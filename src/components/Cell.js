import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { BLOCKS } from '../blocks';


const Cell = ({ type }) => (
    <StyledCell type={'L'} color={BLOCKS['L'].color}></StyledCell>
)

export default Cell;