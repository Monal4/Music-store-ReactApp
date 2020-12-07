import { ProductActionTypes, REQUEST_FAILURE, REQUEST_SUCCESSFUL } from "../../Actions/product.actions/product.types";
import { product } from '../../../types/producttypes';

interface defaultState {
    isFetching: boolean
    products?: product[]
    message?: any
}

const initialState: defaultState = {
    isFetching: true
};

function productReducer(state: defaultState = initialState, action: ProductActionTypes) : defaultState {
    switch(action.type){
        
        case REQUEST_SUCCESSFUL: 
            return{
                ...state,
                products: action.payload,
                isFetching: false
            };
        case REQUEST_FAILURE: 
            return{
                ...state,
                message: action.payload,
                isFetching: false
            };
        default: 
            return{
                ...state
            };
    }
}

export default productReducer;