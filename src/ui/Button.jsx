import React from 'react';
import MuiButton from '@mui/material/Button';

const Button = ({ onClick, className, children, error, text, disabled, id, type, fullwidth }) => {
  return (
    <MuiButton
      id={id}
      fullwidth={fullwidth}
      type={type}
      disabled={disabled}
      color={error ? 'error' : 'primary'}
      variant={text ? 'text' : 'contained'}
      onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;
