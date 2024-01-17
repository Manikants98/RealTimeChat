import {View} from 'react-native';
import {Button, Divider, TextInput} from 'react-native-paper';
import CustomText from '../../Shared/CustomText';

import {primary, secondary} from '../../Helper';

const SignInScreen = ({navigation}) => {
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: secondary,
        gap: 10,
        padding: 20,
      }}>
      <CustomText
        style={{
          textAlign: 'center',
          fontSize: 30,
          color: primary,
        }}>
        Real Time Chat™
      </CustomText>
      <CustomText
        style={{
          color: primary,
          textAlign: 'center',
          fontSize: 40,
        }}>
        Sign In
      </CustomText>

      <TextInput
        id="email"
        outlineColor={primary}
        mode="outlined"
        label="Email"
        placeholder="Enter Email"
      />

      <TextInput
        id="password"
        outlineColor={primary}
        mode="outlined"
        label="Password"
        placeholder="Enter Password"
        secureTextEntry
      />
      <Button
        style={{marginVertical: 10}}
        buttonColor={primary}
        mode="contained">
        Submit
      </Button>
      <Divider style={{marginVertical: 10}} />
      <Button
        style={{marginVertical: 10}}
        buttonColor={primary}
        mode="contained"
        onPress={() => navigation.navigate('SignUp')}>
        Sign Up
      </Button>
    </View>
  );
};
export default SignInScreen;
