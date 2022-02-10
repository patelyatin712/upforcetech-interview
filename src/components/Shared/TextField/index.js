import React from 'react';

import { ValidationTextField } from './style';

function TextFieldComp({ id, label, placeholder, value, onChange, required, error, helperText }) {
  return (
    <ValidationTextField
      color="primary"
      focused
      required={required}
      id={id}
      error={error}
      helperText={helperText}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  );
}

export default TextFieldComp;
