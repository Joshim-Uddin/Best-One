import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import { app } from '../Firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
const authInfo = {
    name: 'Joshim uddin'
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;