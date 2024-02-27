import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true);

    const provider = new GoogleAuthProvider()
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }

    const registerUserWithEmailPass = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUserWithEmailPass = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const updateProfileUser = (name,photo) => {
        
        // setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("current user : ",currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        googleSignIn,
        registerUserWithEmailPass,
        loginUserWithEmailPass,
        logOut,
        updateProfileUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;