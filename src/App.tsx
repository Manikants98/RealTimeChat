import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignUpScreen from './Screens/SignUpScreen';
import SplashScreen from './Screens/SplashScreen';
import SignInScreen from './Screens/SignInScreen';

const App = (): React.JSX.Element => {
  const [isSplashScreen, setIsSplashScreen] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const style = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter};

  useEffect(() => {
    setIsSplashScreen(true);
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 3000);
  }, []);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={isSplashScreen ? SplashScreen : SignUpScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SignInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
