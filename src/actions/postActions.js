/* eslint-disable no-console */
import { REGISTER, 
    LOGIN, 
    FAILURE, 
    FETCH_USERSTATICS, 
    FETCH_ADMINUSERLIST, 
    FETCH_QUESTIONANSWERLIST, 
    FETCH_ORDERDETAILSLIST
} from "./types";
import AdminService from "../services/AdminService";

const AdminServices = new AdminService();
export const registerForm = (registerData) => dispatch => {
    console.log("post action");

    AdminServices.adminSignUp(registerData)
        .then(res => {
            dispatch({
                type: REGISTER,
                payload: res
            });
        })
        .catch(err => {
            dispatch({
                type: FAILURE,
                payload: err
            });
        });
};

export const loginForm = (loginData) => dispatch => {
    console.log("login Action");
    AdminServices.adminLogin(loginData)
        .then(res => {
            dispatch({
                type: LOGIN,
                payload: res
            });
            localStorage.setItem("token", res.data.id);
            window.location.href = "/admindashboard";
            // console.log("post action .then",res);
        })
        .catch(err => {
            dispatch({
                type: FAILURE,
                payload: err
            });
        });
};

export const fetchData = () => dispatch => {
    
    AdminServices.userStatics()
        .then(res => {
            dispatch({
                type: FETCH_USERSTATICS,
                payload: res.data.data.details
            });
            console.log("login Action", res);
        })
        .catch(err => {
            dispatch({
                type: FAILURE,
                payload: err
            });
        });
};

export const getAdminUserList = () => dispatch => {
    AdminServices.getAdminUserList()
        .then(res => {
            dispatch({
                type: FETCH_ADMINUSERLIST,
                payload: res.data.data.data
            });
            console.log("login Action", res);
        })
        .catch(err => {
            dispatch({
                type: FAILURE,
                payload: err
            });
        });
};

export const getQuestionAnswerList = () => dispatch => {
    AdminServices.getQuestionAnswerList()
        .then(res => {
            dispatch({
                type: FETCH_QUESTIONANSWERLIST,
                payload: res.data.data
            });
            console.log("question list Action", res);
        })
        .catch(err => {
            dispatch({
                type: FAILURE,
                payload: err
            });
        });
};

export const getOrderDetailsList = () => dispatch => {
    AdminServices.getOrderDetailsList()
        .then(res => {
            dispatch({
                type: FETCH_ORDERDETAILSLIST,
                payload: res.data.data
            });
            console.log("get order list Action", res);
        })
        .catch(err => {
            dispatch({
                type: FAILURE,
                payload: err
            });
        });
};