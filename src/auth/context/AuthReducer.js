import { types } from "../types/types"; // Importamos los tipos de acciones

// Implementa el reducer para gestionar el estado de autenticación
export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            // Si la acción es de tipo 'login', actualizamos el estado para indicar que el usuario ha iniciado sesión
            return {
                ...state,
                logged: true, // Establecemos logged como true para indicar que el usuario ha iniciado sesión
                user: action.payload  // Establecemos la información del usuario (nombre) en el estado
            };
        case types.logout:
            // Si la acción es de tipo 'logout', actualizamos el estado para indicar que el usuario ha cerrado sesión
            return {
                logged: false,  // Establecemos logged como false para indicar que el usuario ha cerrado sesión
            };
        default:
            // Si la acción no coincide con ningún tipo conocido, retornamos el estado sin realizar cambios
            return state;
    }
}
