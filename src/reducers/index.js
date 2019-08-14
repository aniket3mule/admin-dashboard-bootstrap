import { combineReducers } from 'redux';
import postReducer from './postReducer';
import getAdminUserListReducer  from "./getAdminUserListReducer";

export default combineReducers({
    posts: postReducer,
    adminData:getAdminUserListReducer
});