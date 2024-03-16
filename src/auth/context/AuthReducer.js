import { types } from "../types/types";

export const AuthReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.login:
            return {
                logged: true,
                name: action.payload
            };
        
        case types.logout:
            return {
                logged: false,
                name: action.payload
            };
            
        default:
            return state;      
  
    }
}
