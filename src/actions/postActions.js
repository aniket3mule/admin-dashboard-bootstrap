import { REGISTER, LOGIN } from './types'
import AdminService from "../services/AdminService";


export const registerForm = (registerData) => dispatch => {
console.log("post action");

const AdminServices = new AdminService();

   AdminServices.adminSignUp(registerData)
    .then(res => {
        dispatch({
            type:REGISTER,
            payload: res
        })
    })
}