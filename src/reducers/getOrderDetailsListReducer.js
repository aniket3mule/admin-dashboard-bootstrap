/* eslint-disable no-console */
import { FAILURE, FETCH_ORDERDETAILSLIST } from "../actions/types";

const initialState = {
    orderList:[],
};

export default function (state = initialState, action) {
    switch (action.type) {
        
    case FETCH_ORDERDETAILSLIST: 
        return{
            orderList: action.payload
        };
    case FAILURE:
        console.log("failure reducer", action.payload);
        return {
            failureRes: action.payload
        };
    default:
        return state;
    }
}