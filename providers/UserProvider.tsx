'use client';

import { MyUserContextProvider } from '@/hooks/useUser';
import { ReactNode } from 'react';

interface UserProviderProps {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
}

export default UserProvider;
