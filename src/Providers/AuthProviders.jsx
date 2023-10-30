import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import { app } from '../Firebase/firebase.config';
import { useEffect } from 'react';


const auth = getAuth(app)
auth.languageCode = 'it';
export const AuthContext = createContext(null)


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

const login =(email, password)=>{
    setLoading(true)
 return signInWithEmailAndPassword(auth, email, password)
}
const signUp = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
        return ()=> unsubscribe()
    })
}, [])

const authInfo = {
    user,loading, login, signUp
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;