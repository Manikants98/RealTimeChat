//@ts-nocheck
import React from 'react';
import { Surface, SurfaceProps } from 'react-native-paper';
interface Props extends SurfaceProps {
  className?: string;
}

const CustomView = ({
  className = '',
  elevation = 0,
  children,
  ...rest
}: Props) => (
  <Surface elevation={elevation} className={className} {...rest}>
    {children}
  </Surface>
);

export default CustomView;
