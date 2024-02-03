import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/firebase.Config";

export const AuthContext = createContext(null); //creating context
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setLoggedUser] = useState({});

  //google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //create new user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login with email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Observer /Stay User Logged In
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoggedUser(user);
    });
  }, []);

  //observer /Stay User Logged In----work similar
  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (user) => {
  //     setLoggedUser(user);
  //   });
  //   return () => {
  //     unSubscribe();
  //   };
  // }, []);

  console.log(user);

  const authentications = {
    googleLogin,
    createUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
