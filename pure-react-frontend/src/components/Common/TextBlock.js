import React from 'react';
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
