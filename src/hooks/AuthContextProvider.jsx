import { createContext } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { app } from "../firebase/Firebase.config";
import LoaderScreen from "../others/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import useAxiosSecure from "./useAxios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const Axios = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loginChecking, setLoginChecking] = useState(true);
  const token = Cookies.get("user");

  console.log("user===================", user);
  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        const response = await Axios.get("/user/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("response=========", response);
        if (response.status === 200) {
          setUser(response.data.username);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking user authentication:", error);
        setUser(null);
      } finally {
        setLoginChecking(false);
      }
    };
    if (token) {
      checkUserAuthentication();
    } else {
      setLoginChecking(false);
    }
  }, [token, Axios]);

  const customSignUp = async (data) => {
    try {
      const response = await Axios.post("/user/signup", data);
      if (!response.status) {
        throw response;
      }
      return response;
    } catch (error) {
      console.error("An error occurred during sign-in:", error);
      throw error;
    }
  };
  const signUp = async (name, username, email, password, role) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await customSignUp(name, username, email, password, role);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };
  const customSignIn = async (data) => {
    try {
      const response = await Axios.post("/user/signin", data);
      if (!response.status) {
        throw response;
      }
      return response;
    } catch (error) {
      console.error("An error occurred during sign-in:", error);
      throw error;
    }
  };
  const signIn = async (email, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await customSignIn(email, password);

      console.log(result);

      return result;
    } catch (error) {
      throw error;
    }
  };
  const googleSignIn = () => {
    setLoginChecking(false);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = () => {
    setLoginChecking(false);
    return signInWithPopup(auth, githubProvider);
  };

  const customLogout = async () => {
    Cookies.remove("user");
    setUser(null);

    return null;
  };
  const logout = () => {
    setLoginChecking(false);
    return customLogout();
  };

  const authInfo = {
    googleSignIn,
    user,
    setUser,
    githubSignIn,
    signUp,
    signIn,
    logout,
    loginChecking,
    setLoginChecking,
  };
  if (loginChecking) {
    return (
      <AnimatePresence>
        <LoaderScreen key={loginChecking} />
      </AnimatePresence>
    );
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
