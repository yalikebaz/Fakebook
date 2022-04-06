import './Button.css';
import React from 'react';

function Button({ block, children, onClick }) {
  return (
    <button className={block && 'block'} type="submit" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
