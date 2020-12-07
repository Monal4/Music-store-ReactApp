import { REQUEST_FAILED, SIGNED_IN, UserActionTypes } from "./user.type";
import axios from 'axios';
import {user} from '../../../types/user.types' 
import { Dispatch } from "redux";

export const LogIn = (user: user) => async (dispatch: Dispatch<UserActionTypes>) => {
    try{
        await axios.post(`http://localhost:8081/salesservice/user/register/
                    ${user.firstname}/${user.lastname}/${user.email}`);
        dispatch({
            type: SIGNED_IN
        });
    }catch(err) {
        dispatch({
            type: REQUEST_FAILED,
            payload: err
        });
    }
}