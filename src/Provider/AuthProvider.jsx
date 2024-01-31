import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Config/firebase.Config";

export const AuthContext = createContext(null); //creating context
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
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
