import {View, Image, useColorScheme} from 'react-native';
import CustomText from '../../Shared/CustomText';

const SplashScreen = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
          height: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: '90%', height: 400, padding: 10}}
            source={require('../../Assets/chat.png')}
          />
          <CustomText
            style={{fontSize: 30, color: isDarkMode ? 'white' : 'black'}}>
            Real Time Chat™
          </CustomText>
          <CustomText
            style={{fontSize: 18, color: isDarkMode ? 'white' : 'gray'}}>
            Welcome to the RealTime Chat App
          </CustomText>
        </View>
        <CustomText style={{color: isDarkMode ? 'white' : 'gray'}}>
          Powerd by MKX
        </CustomText>
      </View>
    </View>
  );
};
export default SplashScreen;
