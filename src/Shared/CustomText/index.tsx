import {useTheme} from '@react-navigation/native';
import React, {PropsWithChildren, useMemo} from 'react';
import {Text as NativeText, StyleSheet, useColorScheme} from 'react-native';
import createStyles from './style';

type TextProps = PropsWithChildren<{
  style?: object;
  xxs?: boolean;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
  xxxl?: boolean;
  thin?: boolean;
  ultraLight?: boolean;
  light?: boolean;
  regular?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  heavy?: boolean;
  normal?: boolean;
  color?: string;
  capitalize?: boolean;
  children: string;
}>;
const CustomText = ({
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  xxxl,
  thin,
  ultraLight,
  light,
  regular,
  medium,
  semiBold,
  bold,
  heavy,
  normal,
  children,
  capitalize,
  color,
  style,
  ...rest
}: TextProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeText
      style={StyleSheet.flatten([
        {color: isDarkMode ? 'white' : 'black'},
        style,
        xxs && styles.xxs,
        xs && styles.xs,
        sm && styles.sm,
        md && styles.md,
        lg && styles.lg,
        xl && styles.xl,
        xxl && styles.xxl,
        xxxl && styles.xxxl,
        thin && styles.thin,
        ultraLight && styles.ultraLight,
        light && styles.light,
        regular && styles.regular,
        medium && styles.medium,
        semiBold && styles.semiBold,
        bold && styles.bold,
        heavy && styles.heavy,
        normal && styles.normal,
        capitalize && styles.capitalize,
      ])}
      {...rest}>
      {children}
    </NativeText>
  );
};

export default CustomText;
