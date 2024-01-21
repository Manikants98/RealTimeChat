import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';

const CustomInput = ({
  id = '',
  mode = 'outlined',
  className = '',
  ...rest
}: TextInputProps) => {
  return <TextInput id={id} mode={mode} {...rest} className={className} />;
};

export default CustomInput;
