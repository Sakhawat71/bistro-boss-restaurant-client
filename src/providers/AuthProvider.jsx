import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import useAxiosPublic from '../hooks/useAxiosPublic';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

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

            if(currentUser){
                // GET token and store user in localstor

                const userInfo = {email: currentUser.email}

                axiosPublic.post('/api/v1/jwt',userInfo)
                .then(res => {

                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })
                .catch(error => console.log(error))

            }
            else{
                // TODO: remove token or log out
                localStorage.removeItem('access-token')
                setLoading(false)
            }



            // setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    },[axiosPublic])

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