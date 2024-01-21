//@ts-nocheck
import React from 'react';
import { Text, TextProps } from 'react-native-paper';
interface Props extends TextProps<{}> {
  className?: string;
}

const CustomText = ({ className = '', children, ...rest }: Props) => {
  return (
    <Text className={className} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
