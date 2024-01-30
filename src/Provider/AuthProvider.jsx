import { createContext } from "react";

const AuthContext = createContext(null); //creating context

const AuthProvider = ({ children }) => { //component always have props and children



  

  return 
  <AuthContext.Provider value={ }>
    {children}
  </AuthContext.Provider>
    
};

export default AuthProvider;
