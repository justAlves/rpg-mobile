import {createContext, useState, useEffect} from 'react';
import api from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextData = {
  signUp: (data: AuthData) => void;
  signIn: (data: AuthData) => void;
  signed: boolean;
  user: AuthResponse | null;
  setUser: React.Dispatch<React.SetStateAction<AuthResponse | null>>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

interface AuthData {
  name?: string;
  email: string;
  password: string;
}

interface AuthResponse {
  id: string;
  name: string;
  token?: string;
  email: string;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<AuthResponse>();

  useEffect(() => {
    async function loadToken() {
      const token = await AsyncStorage.getItem('@token');

      if (token) {
        try {
          const response = await api.get('/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          api.defaults.headers.Authorization = `Bearer ${token}`;

          const {id, name, email}: AuthResponse = response.data.user;
          setUser({id, name, email});
          console.log(user);
        } catch (error) {
          console.log(error);
        }
      } else {
        setUser(null);
      }
    }

    loadToken();
  }, []);

  async function signUp({name, email, password}: AuthData) {
    try {
      const response = api.post('/register', {
        name,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function signIn({email, password}: AuthData) {
    try {
      const response = await api.post('/auth', {
        email,
        password,
      });

      const {id, name, token} = response.data.user;
      await AsyncStorage.setItem('@token', token as string);
      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser({id, name, email});
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, signUp, signIn, user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
