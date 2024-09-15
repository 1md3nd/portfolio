import React from 'react';

function BlankSpace() {
  return (
    <div
      className='blank-space'
      style={{
        height: 'var(--baseline-2x)', 
        borderLeft: 'var(--border)', 
        borderBottom: 'var(--border)', 
        borderTop: '1px solid red', // Added to help troubleshoot
        borderRight: '1px solid blue' // Added to help troubleshoot
      }}
    >
      {/* You can add any additional content or styling within the Box */}
    </div>
  );
}

export default BlankSpace;
