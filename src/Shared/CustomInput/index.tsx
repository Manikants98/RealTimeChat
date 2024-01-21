//@ts-nocheck
import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';

interface Props extends TextInputProps {
  className?: string;
}

const CustomInput = ({
  id = '',
  mode = 'outlined',
  className,
  ...rest
}: Props) => {
  return <TextInput id={id} mode={mode} {...rest} className={className} />;
};

export default CustomInput;
