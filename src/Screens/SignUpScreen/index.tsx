import showToast from '@/Helper';
import CustomButton from '@/Shared/CustomButton';
import CustomInput from '@/Shared/CustomInput';
import CustomText from '@/Shared/CustomText';
import CustomView from '@/Shared/CustomView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/database';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Divider, useTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const SignUpScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usersRef = firebase.database().ref('users');

  const handleSignUp = async () => {
    if (!name) {
      showToast('Enter Your Name', { type: 'error' });
      return;
    }
    if (!email) {
      showToast('Enter Your Email', { type: 'error' });
      return;
    }
    if (!password) {
      showToast('Enter Your Password', { type: 'error' });
      return;
    }
    try {
      const newUserKey: any = usersRef.push().key;
      const userData = { name, email, password, created_at: moment(new Date()).format() };
      await usersRef.child(newUserKey).set(userData);
      console.log('User data inserted successfully!');
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setName('');
      setEmail('');
      setPassword('');
      navigation.navigate('Chat');
    } catch (error) {
      console.error('Error inserting user data:', error);
    }
  };
  const isLogined = async () => {
    const isLogin = await AsyncStorage.getItem('user');
    if (isLogin) {
      navigation.navigate('Chat');
    }
  };
  const theme = useTheme();

  useEffect(() => {
    isLogined();
  }, []);

  return (
    <CustomView style={{ gap: 16, backgroundColor: theme.colors.surface }} className="flex flex-col h-screen justify-center p-4">
      <Toast />
      <CustomView className="flex flex-col items-center justify-center">
        <CustomText className="text-5xl">Sign Up</CustomText>
        <CustomText>Ready to get started? Sign up now!</CustomText>
      </CustomView>
      <CustomInput id="name" label="Name" placeholder="Enter Name" value={name} onChangeText={setName} />
      <CustomInput id="email" label="Email" placeholder="Enter Email" value={email} onChangeText={setEmail} />
      <CustomInput id="phone" label="Phone" placeholder="Enter Phone" />
      <CustomInput id="password" label="Password" placeholder="Enter Password" value={password} onChangeText={setPassword} secureTextEntry />
      <CustomButton onPress={() => handleSignUp()}>Submit</CustomButton>
      <Divider />
      <CustomText className="text-center">Already have an account</CustomText>
      <CustomButton onPress={() => navigation.navigate('SignIn')}>Sign In</CustomButton>
    </CustomView>
  );
};
export default SignUpScreen;
