import './Input.css';
import React from 'react';

function Input({
  search, onChange, placeholder, block, value,
}) {
  const blockClass = block ? 'block' : '';

  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      type={search ? 'search' : 'text'}
      className={`${blockClass}`}
      value={value}
    />
  );
}

export default Input;
