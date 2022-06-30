//import { types } from "../types/types";


const intialState = {
    authLogged:  false,
    authCheking: false,
    authUID:     null,
    
}

export const userReducer = ( state = intialState, action ) => {
    
    switch (action.type) {
        case ( 'types definir' ):
            return{
                ...state,

            };

        default:
            return state;
    }    


}

