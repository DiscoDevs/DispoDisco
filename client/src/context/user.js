import React, { useContext, useEffect, useState } from "react";
import propTypes from "prop-types";

export const userContext = React.createContext(null);

export const UserProvider = ({ children, currentUser = "benji" }) => {
  UserProvider.propTypes = {
    children: propTypes.node,
    currentUser: propTypes.string,
  };
  const [user, setUser] = useState("benji");

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
export const useUsers = () => useContext(userContext);
export const useUser = () => useUsers().user;
export const useChangeUser = () => useUsers().setUser;
