/* eslint-disable no-console */
import { REGISTER, LOGIN, FAILURE, FETCH_USERSTATICS } from "../actions/types";

const initialState = {
    item: {},
    loginRes: {},
    failureRes: {},
    userStatics: [],
    adminUserList:[],
};

export default function (state = initialState, action) {
    switch (action.type) {
    case REGISTER:
        console.log("reducer", action.payload);
        return {
            item: action.payload
        };
    case LOGIN:
        console.log("login reducer", action.payload);
        return {
            loginRes: action.payload
        };
    case FETCH_USERSTATICS:
        console.log("login reducer", action.payload);
        return {
            userStatics: action.payload
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


