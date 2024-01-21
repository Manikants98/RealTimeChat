//@ts-nocheck
import React from 'react';
import { Divider } from 'react-native-paper';
import CustomButton from '@Shared/CustomButton';
import CustomInput from '@Shared/CustomInput';
import CustomText from '@Shared/CustomText';
import CustomView from '@Shared/CustomView';

const SignInScreen = ({ navigation }: any) => {
  return (
    <CustomView
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 6,
        padding: 20,
      }}>
      <CustomView className="flex flex-col items-center justify-center">
        <CustomText
          style={{
            fontSize: 40,
          }}>
          Sign In
        </CustomText>
        <CustomText>Welcome back! Let's get you signed in.</CustomText>
      </CustomView>

      <CustomInput id="email" label="Email" placeholder="Enter Email" />

      <CustomInput
        id="password"
        label="Password"
        placeholder="Enter Password"
        secureTextEntry
      />
      <CustomButton
        style={{ marginVertical: 10 }}
        onPress={() => navigation.navigate('Chat')}>
        Submit
      </CustomButton>
      <Divider style={{ marginVertical: 10 }} />
      <CustomButton
        style={{ marginVertical: 10 }}
        onPress={() => navigation.navigate('SignUp')}>
        Sign Up
      </CustomButton>
    </CustomView>
  );
};
export default SignInScreen;
