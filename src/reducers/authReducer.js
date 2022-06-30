import { types } from "../types/types";


const intialState = {
    userID:      null,
    userName:    null,
    userEmail:   null,
    userPref:    {},
}

export const authReducer = ( state = intialState, action ) => {
    
    switch (action.type) {
        case ( types.authResgister ):
            return{
                ...state,
            };

        default:
            return state;
    }    


}

