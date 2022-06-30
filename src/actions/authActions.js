import { fetchRegisterEmailPassword } from "../helpers/fetch";
import { uiFinishLoading, uiStartLoading } from "./ui";



export const authRegisterWithEmailPassword = data => {

    return async(dispatch) => {

        dispatch(uiStartLoading());
        await fetchRegisterEmailPassword(data)
        .then((data) => {
            console.log(data)
            dispatch()
            dispatch( uiFinishLoading() )
        })
        .catch(e => {
            // console.log(e)
            dispatch( uiFinishLoading() )
            //ERROR SWAL
        })    
        

    }
};
 










/*

import { types } from "../types/types";



export const eventAddNew = event => ({
    type: types.eventAddNew,
    payload: event
})

export const eventSetActive = event => ({
    type: types.eventSetActive,
    payload: event
})

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent
})


export const eventUpdated = event => ({
    type: types.eventUpdated,
    payload: event
})

export const eventDeleted = () => ({
    type: types.eventDeleted
})


*/