import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import AuthProvider from './contexts/auth';
import ToastManager from 'toastify-react-native';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <ToastManager/>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
