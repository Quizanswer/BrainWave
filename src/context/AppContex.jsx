import React, { createContext, useState } from "react";

export const Appcontext = createContext();
const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const value = { token, setToken };
  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
};

export default AppContextProvider;
