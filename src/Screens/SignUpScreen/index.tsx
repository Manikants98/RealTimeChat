import {View, useColorScheme} from 'react-native';
import {Button, Divider, TextInput} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomText from '../../Shared/CustomText';

const SignUpScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const primary = '#39A7FF';
  const secondary = '#E0F4FF';
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: isDarkMode ? Colors.darker : secondary,
        gap: 10,
        padding: 10,
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          gap: 15,
          padding: 10,
        }}>
        <CustomText
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: isDarkMode ? 'white' : primary,
          }}>
          Real Time Chat™
        </CustomText>
        <CustomText
          style={{
            color: isDarkMode ? 'white' : primary,
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
          mode="contained">
          Submit
        </Button>
        <Divider style={{marginVertical: 10}} />
        <Button
          style={{marginVertical: 10}}
          buttonColor={primary}
          mode="contained">
          Sign In
        </Button>
      </View>
    </View>
  );
};
export default SignUpScreen;
