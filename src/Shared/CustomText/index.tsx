import React from 'react';
import { Text, TextProps } from 'react-native-paper';
interface T {}
const CustomText = ({ className = '', children, ...rest }: TextProps<T>) => {
  return (
    <Text className={className} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
