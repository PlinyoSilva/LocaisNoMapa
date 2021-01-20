import React, { createContext} from 'react';
import auth from '../services/auth';

const AuthContexData = {
    signed: Boolean,
    token: String,
    user: Object,
    signInC: async ()=>{},
}

export const AuthContext = createContext(AuthContexData);

export const AuthProvider = ({children}) => {
    // async function signInL(){
    //     const response = await auth;

    //     console.log(response)
    // }
    
    return (
        <AuthContext.Provider value={{signed: false}}>
        {children}
        </AuthContext.Provider>
    );
};
