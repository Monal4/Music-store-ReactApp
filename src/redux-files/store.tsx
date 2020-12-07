import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducers from "./reducers/root.reducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const middleWare = [thunk];

const store = createStore( RootReducers, composeWithDevTools( applyMiddleware(...middleWare) ) );

export type RootStore = ReturnType<typeof RootReducers>

export default store;