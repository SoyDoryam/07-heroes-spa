import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';

const initialState = {
    logged: false,
}

// Crea el proveedor que utiliza el contexto de autenticación
export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
