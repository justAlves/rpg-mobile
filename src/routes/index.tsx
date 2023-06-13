import React, {useContext, useEffect} from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import {AuthContext} from '../contexts/auth';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import api from '../api';

export default function Routes() {
  const {signed} = useContext(AuthContext);

  if (signed) {
    return <AppRoutes />;
  } else {
    return <AuthRoutes />;
  }
}
