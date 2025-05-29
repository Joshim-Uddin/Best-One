import React, { createContext, useState } from 'react';
import {RecaptchaVerifier, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPhoneNumber, signOut} from 'firebase/auth'
import { app } from '../Firebase/firebase.config';
import { useEffect } from 'react';


const auth = getAuth(app)

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
    const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
    return createUserWithEmailAndPassword(auth, email, password, recaptcha)
}
const loggingOut = ()=>{
    setLoading(true);
    return signOut(auth)
}
// const sellerSignUp = (phoneNumber)=>{
//     const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
//     return signInWithPhoneNumber(auth, phoneNumber, recaptcha)
// }
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> unsubscribe()
}, [])

const authInfo = {
    user,loading, login, signUp, loggingOut
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;