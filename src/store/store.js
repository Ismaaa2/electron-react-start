import { applyMiddleware } from "redux";
import { createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


// __REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
