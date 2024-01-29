import SplashScreen from '@/Screens/SplashScreen';
import ChatScreen from '../Screens/ChatScreen';
import MessageScreen from '../Screens/MessageScreen';
import SignUpScreen from '@/Screens/SignUpScreen';
import SignInScreen from '@/Screens/SignInScreen';

export const routes = [
  {
    id: 1,
    component: SplashScreen,
    name: 'Splash',
  },
  {
    id: 2,
    component: SignUpScreen,
    name: 'SignUp',
  },
  {
    id: 3,
    component: SignInScreen,
    name: 'SignIn',
  },
  {
    id: 4,
    component: ChatScreen,
    name: 'Chat',
  },
  {
    id: 5,
    component: MessageScreen,
    name: 'Message',
  },
];
