import { REGISTER, LOGIN } from '../actions/types'

const initialState = {
    items : [],
    item : {}
}

export default function(state = initialState, action){
    switch(action.type){
        case REGISTER:
            console.log("reducer", action.payload);
            return{
                item:action.payload
            }
        default: 
        return state
    }
}