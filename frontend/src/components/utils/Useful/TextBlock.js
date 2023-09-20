import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import css from './TextBlock.module.css';
function TextBlock(props) {
  return (
    <div className={css.container} >
        <p>
        {props.text}
        </p>
    </div>
  );
}

export default TextBlock;
