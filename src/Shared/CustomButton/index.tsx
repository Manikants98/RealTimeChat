import React from 'react';
import { Button, ButtonProps } from 'react-native-paper';

const CustomButton = ({
  mode = 'elevated',
  style,
  children,
  className = '',
  ...rest
}: ButtonProps) => {
  return (
    <Button className={className} style={style} mode={mode} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
