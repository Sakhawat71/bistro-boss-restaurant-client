import { createContext } from "react";

export const AuthContext = createContext()
const AuthProvider = () => {

    

    const authInfo = {};

    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;