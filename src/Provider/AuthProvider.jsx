import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
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

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authentications = {
    googleLogin,
    createUser,
  };

  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
