import axios from "axios";

const baseURL = "http://34.213.106.173/api";

class AdminService {
    adminSignUp(data) {
        return axios .post(`${baseURL}/user/adminSignUp`, data)
    }
}

export default AdminService;