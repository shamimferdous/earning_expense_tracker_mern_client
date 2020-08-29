import React, { createContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const AuthContext = createContext();


const AuthContextFunction = ({ children }) => {

    const [passcode, setPasscode] = useState(null);

    const injectPasscodeToRequest = (string) =>{
        setPasscode(string);
    }


    return (
        <AuthContext.Provider value={{ setPasscode, passcode, injectPasscodeToRequest }}>

            {children}

        </AuthContext.Provider>
    )

}

export default AuthContextFunction;