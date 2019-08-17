import { combineReducers } from 'redux';
import postReducer from './postReducer';
import getAdminUserListReducer  from "./getAdminUserListReducer";
import getQuestionAnswerListReducer from './getQuestionAnswerListReducer';
import getOrderDetailsList from './getOrderDetailsListReducer';

export default combineReducers({
    posts: postReducer,
    adminData:getAdminUserListReducer,
    queansData : getQuestionAnswerListReducer,
    orderList:getOrderDetailsList
});