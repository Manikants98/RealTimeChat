import {View} from 'react-native';
import {Button, Divider, TextInput} from 'react-native-paper';
import CustomText from '../../Shared/CustomText';
import {primary, secondary} from '../../Helper';

const SignUpScreen = ({navigation}) => {
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
        Sign Up
      </CustomText>
      <TextInput
        id="first_name"
        outlineColor={primary}
        mode="outlined"
        label="First Name"
        placeholder="Enter First Name"
      />
      <TextInput
        id="last_name"
        outlineColor={primary}
        mode="outlined"
        label="Last Name"
        placeholder="Enter Last Name"
      />
      <TextInput
        id="email"
        outlineColor={primary}
        mode="outlined"
        label="Email"
        placeholder="Enter Email"
      />
      <TextInput
        id="phone"
        outlineColor={primary}
        mode="outlined"
        label="Phone"
        placeholder="Enter Phone"
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
        mode="contained"
        onPress={() => navigation.navigate('Chat')}>
        Submit
      </Button>
      <Divider style={{marginVertical: 10}} />
      <Button
        style={{marginVertical: 10}}
        buttonColor={primary}
        mode="contained"
        onPress={() => navigation.navigate('SignIn')}>
        Sign In
      </Button>
    </View>
  );
};
export default SignUpScreen;
