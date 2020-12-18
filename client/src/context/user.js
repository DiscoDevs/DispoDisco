import React, { useContext, useEffect, useState } from "react";
import propTypes from "prop-types";

export const userContext = React.createContext(null);

export const UserProvider = ({ children, currentUser }) => {
  UserProvider.propTypes = {
    children: propTypes.node,
    currentUser: propTypes.object,
  };
  const [user, setUser] = useState({});

  useEffect(() => {
    const storrageUser = JSON.parse(localStorage.getItem("user"));

    if (currentUser.alias !== storrageUser?.alias) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
    setUser(storrageUser);
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
