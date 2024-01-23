import React from 'react';
import { Divider, useTheme } from 'react-native-paper';
import CustomButton from '@/Shared/CustomButton';
import CustomInput from '@/Shared/CustomInput';
import CustomText from '@/Shared/CustomText';
import CustomView from '@/Shared/CustomView';

const SignInScreen = ({ navigation }: any) => {
  const theme = useTheme();
  return (
    <CustomView
      style={{ gap: 16, backgroundColor: theme.colors.surface }}
      className="flex flex-col h-full justify-center p-4">
      <CustomView className="flex flex-col items-center justify-center">
        <CustomText className="text-5xl">Sign In</CustomText>
        <CustomText>Welcome back! Let's get you signed in.</CustomText>
      </CustomView>
      <CustomInput id="email" label="Email" placeholder="Enter Email" />
      <CustomInput
        id="password"
        label="Password"
        placeholder="Enter Password"
        secureTextEntry
      />
      <CustomButton onPress={() => navigation.navigate('Chat')}>
        Submit
      </CustomButton>
      <Divider />
      <CustomText className="text-center">Don't have an account</CustomText>
      <CustomButton onPress={() => navigation.navigate('SignUp')}>
        Sign Up
      </CustomButton>
    </CustomView>
  );
};
export default SignInScreen;
