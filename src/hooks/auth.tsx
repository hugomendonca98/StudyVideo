import {
  ReactNode,
  useContext,
  useMemo,
  createContext,
  useCallback,
  useState,
} from 'react';

import api from '@/services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SigninCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SigninCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@StudyVideo:token');
    const user = localStorage.getItem('@StudyVideo:user');

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@StudyVideo:token', token);
    localStorage.setItem('@StudyVideo:user', JSON.stringify(user));

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@StudyVideo:token');
    localStorage.removeItem('@StudyVideo:user');

    setData({} as AuthState);
  }, []);

  const value = useMemo(
    () => ({ user: data.user, signIn, signOut }),
    [data.user, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
