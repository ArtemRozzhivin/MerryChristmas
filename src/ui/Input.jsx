import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import React from 'react';

const Input = ({ value, onChange, className, placeholder, type, id, error, helperText }) => {
  return (
    <TextField
      fullWidth
      id={id}
      type={type}
      color="primary"
      label={placeholder}
      variant="outlined"
      value={value}
      helperText={helperText}
      error={error}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
