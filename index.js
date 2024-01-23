/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name } from './app.json';
import App from './src/App';

import { initializeApp } from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCtwvjuFyUc92wPFgSlRPQP-4-h7emrhhU',
  authDomain: 'chatmkx.firebaseapp.com',
  projectId: 'chatmkx',
  databaseURL: 'https://chatmkx-default-rtdb.firebaseio.com/',
  storageBucket: 'chatmkx.appspot.com',
  messagingSenderId: '850706067133',
  appId: '1:850706067133:web:5e3d85b511451a2ab051d4',
  measurementId: 'G-Z9Z6VSXWNS',
};

if (initializeApp && initializeApp.apps && !initializeApp.apps.length) {
  const app = initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(name, () => App);
