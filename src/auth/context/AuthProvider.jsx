import { useReducer } from 'react';
import { AuthContext } from './AuthContext'; // Importamos el contexto de autenticación
import { AuthReducer } from './AuthReducer'; // Importamos el reducer de autenticación
import { types } from '../types/types'; // Importamos los tipos de acciones


// Función de inicialización para obtener el estado inicial del contexto de autenticación
const init = () => {
    const user = JSON.parse( localStorage.getItem('user') ); // Obtenemos el usuario almacenado en localStorage

    return {
        logged: !!user, // Si hay un usuario en localStorage, establecemos logged como true
        user, // Establecemos el usuario obtenido de localStorage
    }
}

// Crea el proveedor que utiliza el contexto de autenticación
export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(AuthReducer, {}, init); // Usamos useReducer con el reducer de autenticación y la función de inicialización

    // Función para iniciar sesión
    const login = (name = '') => {

        const user = {id: 'ABC', name}
        // Crea una acción de inicio de sesión con un payload que incluye un identificador y el nombre del usuario
        const action = {
            type: types.login,
            payload: user
        }     

        localStorage.setItem('user', JSON.stringify(user))

        // Despacha la acción
        dispatch(action);
    }

    // Retorna el proveedor de contexto de autenticación con el estado de autenticación y la función de inicio de sesión
    return (
        <AuthContext.Provider value={{
            ...authState, // Pasamos el estado de autenticación al contexto
            login // Pasamos la función de inicio de sesión al contexto
        }}>
            {children} {/* Renderizamos los componentes hijos */}
        </AuthContext.Provider>
    )
}
