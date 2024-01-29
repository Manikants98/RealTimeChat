import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { routes } from './Routes';
import SplashScreen from './Screens/SplashScreen';
import CustomStatus from './Shared/CustomStatus';

const App = () => {
  const [isSplashScreen, setIsSplashScreen] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    setIsSplashScreen(true);
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 3000);
  }, []);

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
            {routes?.map(({ id, name, component }) => {
              return (
                <Stack.Screen key={id} name={name} component={component} />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </PaperProvider>
  );
};

export default App;
