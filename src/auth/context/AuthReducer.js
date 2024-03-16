import { types } from "../types/types";

// Implementa el reducer para gestionar el estado de autenticación
export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload  // Establece el nombre del usuario al iniciar sesión
            };
        case types.logout:
            return {
                logged: false,  // Establece logged como falso al cerrar sesión
            };
        default:
            return state;
    }
}
