import React, { createContext, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import { app } from '../Firebase/firebase.config';


const auth = getAuth(app)
auth.languageCode = 'it';
export const AuthContext = createContext(null)


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)

const login =(email, password)=>{
 return signInWithEmailAndPassword(auth, email, password)
}
const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
    return ()=> unsubscribe()
})

const authInfo = {
    user,
    setUser
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;