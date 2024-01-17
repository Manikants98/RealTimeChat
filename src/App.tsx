import React, {useEffect, useState} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './Screens/SplashScreen';
import SignUpScreen from './Screens/SignUpScreen';

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

  return (
    <SafeAreaView style={style}>
      {isSplashScreen ? <SplashScreen /> : <SignUpScreen />}
    </SafeAreaView>
  );
};

export default App;
