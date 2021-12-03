import { ReactChild, ReactNode, useState, createContext } from "react";

interface ContextProps {
  loggedUser: boolean;
  checkIfAuth: () => void;
}

export const UsersContext = createContext<ContextProps>({ loggedUser: false, checkIfAuth: () => false });

interface ContextProvider {
  children: ReactChild | ReactNode;
}

const UsersContextProvider = ({ children }: ContextProvider): JSX.Element => {
  const [loggedUser, setLoggedUser] = useState(false);
  function checkIfAuth() {
    setLoggedUser(true);
  }
  const loggedAuthUser = {
    loggedUser,
    checkIfAuth,
  };

  return <UsersContext.Provider value={loggedAuthUser}>{children}</UsersContext.Provider>;
};

export default UsersContextProvider;
