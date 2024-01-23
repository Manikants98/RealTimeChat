import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { useTheme } from 'react-native-paper';

const CustomStatus = () => {
  const mode = useColorScheme();
  const theme = useTheme();
  return (
    <StatusBar
      backgroundColor={theme.colors.surface}
      barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
    />
  );
};

export default CustomStatus;
