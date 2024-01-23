import CustomStatus from '@/Shared/CustomStatus';
import CustomText from '@/Shared/CustomText';
import CustomView from '@/Shared/CustomView';
import React from 'react';
import { Image } from 'react-native';
import { useTheme } from 'react-native-paper';

const SplashScreen = (): React.JSX.Element => {
  const theme = useTheme();
  const source = require('../../Assets/chat.png');
  return (
    <CustomView
      style={{ backgroundColor: theme.colors.surface }}
      className="flex flex-col justify-center h-screen items-center">
      <CustomStatus />
      <CustomView className="flex relative justify-between flex-col w-full h-full items-center">
        <CustomView className="flex w-full justify-center items-center">
          <Image className="w-full h-2/3" source={source} />
          <CustomText className="text-3xl">Real Time Chat™</CustomText>
          <CustomText className="text-xl">
            Welcome to the RealTime Chat App
          </CustomText>
        </CustomView>
        <CustomText className="absolute bottom-10">Powerd by MKX</CustomText>
      </CustomView>
    </CustomView>
  );
};
export default SplashScreen;
