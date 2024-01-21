import CustomText from '@/Shared/CustomText';
import CustomView from '@/Shared/CustomView';
import React from 'react';
import { Image } from 'react-native';

const SplashScreen = (): React.JSX.Element => {
  return (
    <CustomView
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
      }}>
      <CustomView
        style={{
          width: '100%',
          height: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <CustomView
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{ width: '90%', height: 400, padding: 10 }}
            source={require('../../Assets/chat.png')}
          />
          <CustomText style={{ fontSize: 30, color: 'black' }}>
            Real Time Chat™
          </CustomText>
          <CustomText style={{ fontSize: 18, color: 'gray' }}>
            Welcome to the RealTime Chat App
          </CustomText>
        </CustomView>
        <CustomText style={{ color: 'gray' }}>Powerd by MKX</CustomText>
      </CustomView>
    </CustomView>
  );
};
export default SplashScreen;
