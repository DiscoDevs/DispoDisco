import React, { useContext, useEffect, useState } from "react";
import propTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { accessCookie, createCookie, deleteCookie } from "../utils/cookies";

export const userContext = React.createContext();

export const UserProvider = ({ children }) => {
  UserProvider.propTypes = {
    children: propTypes.node,
    currentUser: propTypes.object,
  };
  const history = useHistory();

  // const cookieUser = JSON.parse(accessCookie("user"));
  const cookieUser = accessCookie("user");

  // const cookieCompany = JSON.parse(accessCookie("company"));
  const cookieCompany = accessCookie("company");

  const [user, setUser] = useState("not logged in ");
  const [company, setCompany] = useState({
    name: "no company logged in",
  });

  useEffect(() => {
    if (cookieUser !== "" && cookieCompany !== "") {
      setUser(cookieUser);
      setCompany(cookieCompany);
    }
  }, [cookieCompany, cookieUser]);
  console.log({ user, cookieUser, company, cookieCompany });
  const loginUser = async (user) => {
    setUser(user);
    createCookie("user", user, 1);
  };

  const checkUser = async (user) => {
    const cookie = accessCookie("user");
    return cookie === user;
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
    deleteCookie("user");
    deleteCookie("company");
    history.push("/");
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
