/* eslint-disable no-console */
import { FAILURE, FETCH_QUESTIONANSWERLIST } from "../actions/types";

const initialState = {
    questionAnswerList:[],
};

export default function (state = initialState, action) {
    switch (action.type) {
        
    case FETCH_QUESTIONANSWERLIST: 
        return{
            questionAnswerList: action.payload
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


