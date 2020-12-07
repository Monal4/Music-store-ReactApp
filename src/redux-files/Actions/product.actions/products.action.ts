import { Dispatch } from "redux";
import { ProductActionTypes, REQUEST_SUCCESSFUL, REQUEST_FAILURE } from "./product.types";

import axios from "axios";

export const GetProducts = () => async (dispatch: Dispatch<ProductActionTypes>) => {
    try{
        const response = await axios(`http://localhost:8081/catalogservice/getAllProducts`,{
            responseType: 'json'
        });

        dispatch({
            type: REQUEST_SUCCESSFUL,
            payload: response.data
        });
    }catch (err) {
        dispatch({
            type: REQUEST_FAILURE,
            payload: err
        });
    }
};
