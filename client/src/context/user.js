import React, { useContext, useEffect, useState } from "react";
import propTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { accessCookie, createCookie, deleteCookie } from "../utils/cookies";

export const userContext = React.createContext();

const cookieUser = accessCookie("user");
const cookieCompany = accessCookie("company");

export const UserProvider = ({ children }) => {
  UserProvider.propTypes = {
    children: propTypes.node,
    currentUser: propTypes.object,
  };
  const history = useHistory();

  const [user, setUser] = useState({ alias: "not logged in " });

  const [company, setCompany] = useState({
    name: "no company logged in",
  });

  useEffect(() => {
    if (cookieUser && cookieCompany) {
      setUser(JSON.parse(cookieUser));
      setCompany(JSON.parse(cookieCompany));
    }
  }, []);

  const loginUser = async (user) => {
    setUser(user);
    createCookie("user", user, 1);
  };

  const checkUser = (user) => {
    if (cookieUser) {
      return cookieUser.alias === user.alias;
    }
  };

  const loginCompany = async (company) => {
    setCompany(company);
    createCookie("company", company, 1);
  };

  const logout = async () => {
    setUser({
      alias: "not logged in",
      picture:
        "https://robohash.org/844921.pngsize=75x75?set=set5&size=100x100",
    });
    setCompany({
      name: "company logged out",
    });
    history.push("/");
    deleteCookie("user");
    deleteCookie("company");
  };

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        company,
        checkUser,
        setCompany,
        loginUser,
        loginCompany,
        logout,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export const useUsers = () => useContext(userContext);
export const useUser = () => useUsers().user;
export const useLoginUser = () => useUsers().loginUser;
