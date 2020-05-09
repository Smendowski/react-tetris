import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { BLOCKS } from '../blocks';


const Cell = ({ type }) => (
    <StyledCell type={'0'} color={BLOCKS['0'].color}/>
)

export default Cell;