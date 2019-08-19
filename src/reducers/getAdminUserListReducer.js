/* eslint-disable no-console */
import { FAILURE, FETCH_ADMINUSERLIST } from "../actions/types";

const initialState = {
    adminUserList:[],
};

export default function (state = initialState, action) {
    switch (action.type) {
        
    case FETCH_ADMINUSERLIST: 
        return{
            adminUserList: action.payload
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


