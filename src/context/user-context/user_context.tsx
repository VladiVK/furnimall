import React, { useState, useEffect, createContext, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { UserUI } from '../../global-types';

export type UserStateModel = {
  loginWithRedirect: () => any;
  logout: (arg: any) => any;
  myUser: UserUI;
};
type UserProviderProps = {
  children: React.ReactNode;
};
const UserContext = createContext<UserStateModel>({} as UserStateModel);

export const UserProvider = ({ children }: UserProviderProps) => {
  const {
    // isAuthenticated,
    loginWithRedirect,
    user,
    logout,
    // isLoading,
  } = useAuth0();

  const [myUser, setMyUser] = useState(false as UserUI);

  useEffect(() => {
    setMyUser(user as UserUI);
  }, [user]);
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
