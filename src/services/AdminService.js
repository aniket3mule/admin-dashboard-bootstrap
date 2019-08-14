import axios from "axios";

const baseURL = "http://34.213.106.173/api";

class AdminService {
    adminSignUp(data) {
        return axios.post(`${baseURL}/user/adminSignUp`, data)
    }
    adminLogin(data) {
        return axios.post(`${baseURL}/user/adminLogin`, data)
    }
    userStatics() {
        return axios.get(`${baseURL}/user/UserStatics`,{
            headers:{
                'Authorization' : localStorage.getItem('token')
            }
        })
    }
    getAdminUserList() {
        return axios.get(`${baseURL}/user/getAdminUserList`,{
            headers:{
                'Authorization' : localStorage.getItem('token')
            }
        })
    }
}

export default AdminService;