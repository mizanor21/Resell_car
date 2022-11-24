import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // signup area
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Update user
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    //login area
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //State change current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    // LogOut area
    const logOut = () => {
        return signOut(auth)
    }

    //Auth Information
    const authInfo = {
        createUser,
        loginUser,
        user,
        logOut,
        updateUser,
        loading,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;