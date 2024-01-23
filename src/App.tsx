//@ts-nocheck
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { routes } from './Routes';
import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import SplashScreen from './Screens/SplashScreen';
import CustomStatus from './Shared/CustomStatus';

const App = () => {
  const [isSplashScreen, setIsSplashScreen] = useState(false);

  useEffect(() => {
    setIsSplashScreen(true);
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 3000);
  }, []);
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <Toast />
      <CustomStatus />
      {isSplashScreen ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'none',
            }}
            initialRouteName="SignUp">
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            {routes?.map(route => {
              return (
                <Stack.Screen
                  key={route.id}
                  name={route.name}
                  component={route.component}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </PaperProvider>
  );
};

export default App;
