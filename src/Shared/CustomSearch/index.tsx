import React from 'react';
import { Searchbar, SearchbarProps } from 'react-native-paper';

const CustomSearch = ({ value, className = '', ...rest }: SearchbarProps) => {
  return <Searchbar value={value} className={className} {...rest} />;
};

export default CustomSearch;
