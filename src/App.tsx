import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import SignInScreen from './Screens/SignInScreen';
//@ts-nocheck
import SignUpScreen from './Screens/SignUpScreen';
import SplashScreen from './Screens/SplashScreen';
import { routes } from './Routes';
import { Provider, MD3LightTheme, DefaultTheme } from 'react-native-paper';
import { StatusBar } from 'react-native';

const App = (): React.JSX.Element => {
  const [isSplashScreen, setIsSplashScreen] = useState(false);

  useEffect(() => {
    setIsSplashScreen(true);
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 5000);
  }, []);
  const Stack = createNativeStackNavigator();
  const theme = {
    ...MD3LightTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'black',
    },
  };
  return (
    <Provider theme={theme}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false }}
            component={isSplashScreen ? SplashScreen : SignUpScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignIn"
            component={SignInScreen}
          />
          {routes?.map(route => {
            return (
              <Stack.Screen
                key={route.id}
                options={{ headerShown: false }}
                name={route.name}
                component={route.component}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
