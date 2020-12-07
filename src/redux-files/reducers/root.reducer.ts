import { type } from "os";
import { combineReducers } from "redux";
import productReducer from "./product-reducer/product.reducer";
import userReducer from './user-reducer/user-reducer'

const rootReducer = combineReducers({
    products: productReducer,
    user: userReducer
});

export default rootReducer;