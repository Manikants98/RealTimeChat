import React from 'react';
import { Surface, SurfaceProps, useTheme } from 'react-native-paper';

const CustomView = ({
  className = '',
  elevation = 0,
  children,
  ...rest
}: SurfaceProps) => {
  return (
    <Surface elevation={elevation} className={className} {...rest}>
      {children}
    </Surface>
  );
};

export default CustomView;
