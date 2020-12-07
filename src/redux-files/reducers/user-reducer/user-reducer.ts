import { user } from "../../../types/user.types";
import { REQUEST_FAILED, SIGNED_IN, UserActionTypes } from "../../Actions/user.actions/user.type";

interface defaultstate {
    message?: string;
}

const initialState: defaultstate = {
    message: ''
}

const userReducer = (state = initialState, action: UserActionTypes) => {
    switch(action.type){
        case SIGNED_IN:
            return{
                ...state,
                message: 'SuccessFull'
            };
        case REQUEST_FAILED: 
            return {
                ...state,
                message: action.payload
            };
        default:
            return{
                ...state
            };
    }
}

export default userReducer;