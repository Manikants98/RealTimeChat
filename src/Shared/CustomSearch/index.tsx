//@ts-nocheck
import React from 'react';
import { Searchbar, SearchbarProps } from 'react-native-paper';
interface Props extends SearchbarProps {
  className?: string;
}

const CustomSearch = ({ value, className = '', ...rest }: Props) => {
  return <Searchbar value={value} className={className} {...rest} />;
};

export default CustomSearch;
