import React from 'react';
import { Divider } from 'react-native-paper';
import CustomButton from '../../Shared/CustomButton';
import CustomInput from '../../Shared/CustomInput';
import CustomText from '../../Shared/CustomText';
import CustomView from '../../Shared/CustomView';

const SignUpScreen = ({ navigation }: any) => {
  return (
    <CustomView
      className="flex"
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
          Sign Up
        </CustomText>
        <CustomText>Ready to get started? Sign up now!</CustomText>
      </CustomView>

      <CustomInput
        id="first_name"
        label="First Name"
        placeholder="Enter First Name"
      />
      <CustomInput
        id="last_name"
        label="Last Name"
        placeholder="Enter Last Name"
      />
      <CustomInput id="email" label="Email" placeholder="Enter Email" />
      <CustomInput id="phone" label="Phone" placeholder="Enter Phone" />
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
        onPress={() => navigation.navigate('SignIn')}>
        Sign In
      </CustomButton>
    </CustomView>
  );
};
export default SignUpScreen;
