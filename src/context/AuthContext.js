import { React, createContext, useContext, useEffect, useState } from "react";
import { auth } from '../config-firebase';

import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export {AuthContextProvider, UserAuth}

const UserContext = createContext();

const AuthContextProvider = ({children}) => {
    
    const [user, setUser] = useState({})

    //Créer un User (n'enregistre que l'email et le mot de passe bien que nos champs contiennent d'autres info)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Pour avoir le currentUser
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return unSubscribe;
    }, [])

    //Déconnexion
    const logout = () => {
        return signOut(auth)
    }

    //Connexion
    const login = (email, password ) => {
        return signInWithEmailAndPassword(auth, email,password)
    }

    //Reset password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    //Valeur des fonctions  à exporter
    const value = { 
        createUser,
        user,
        logout,
        login,
        resetPassword,
    }

    return <UserContext.Provider value={value}> 
        {children}
    </UserContext.Provider>
}; 

const UserAuth = () => {
    return useContext(UserContext);
};