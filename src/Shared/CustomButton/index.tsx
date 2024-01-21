//@ts-nocheck
import React from 'react';
import { Button, ButtonProps } from 'react-native-paper';

interface Props extends ButtonProps {
  className?: string;
}

const CustomButton = ({
  mode = 'elevated',
  style,
  children,
  className = '',
  ...rest
}: Props) => {
  return (
    <Button className={className} style={style} mode={mode} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
