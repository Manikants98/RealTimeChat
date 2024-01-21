import React from 'react';
import { Surface, SurfaceProps } from 'react-native-paper';

const CustomView = ({
  className = '',
  elevation = 0,
  children,
  ...rest
}: SurfaceProps) => (
  <Surface elevation={elevation} className={className} {...rest}>
    {children}
  </Surface>
);

export default CustomView;
