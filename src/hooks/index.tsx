import { ReactNode } from 'react';
import { AuthProvider } from './auth';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps): JSX.Element {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
