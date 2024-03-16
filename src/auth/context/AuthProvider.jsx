import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import { types } from '../types/types';

const initialState = {
    logged: false,
}

// Crea el proveedor que utiliza el contexto de autenticación
export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(AuthReducer, initialState);

    // Función para iniciar sesión
    const login = (name = '') => {
        // Crea una acción de inicio de sesión con un payload que incluye un identificador y el nombre del usuario
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            }
        }     

        // Despacha la acción
        dispatch(action);
    }

    // Retorna el proveedor de contexto de autenticación con el estado de autenticación y la función de inicio de sesión
    return (
        <AuthContext.Provider value={{
            ...authState,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )
}
