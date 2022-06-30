
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import { userReducer } from './userReducer';



export const rootReducer = combineReducers({

    auth: authReducer,
    user: userReducer,
    ui  : uiReducer

});








/*
import { combineReducers } from 'redux'
import { calendarReducer } from './calendarReducers'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer
    //TODO: AuthReducer
})
*/