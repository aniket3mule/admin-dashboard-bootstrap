import axios from "axios";

const baseURL = "http://34.213.106.173/api";

class AdminService {
    adminSignUp(data) {
        return axios.post(`${baseURL}/user/adminSignUp`, data);
    }
    adminLogin(data) {
        return axios.post(`${baseURL}/user/adminLogin`, data);
    }
    userStatics() {
        return axios.get(`${baseURL}/user/UserStatics`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
    }
    getAdminUserList() {
        return axios.get(`${baseURL}/user/getAdminUserList`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
    }

    getQuestionAnswerList() {
        return axios.get(`${baseURL}/questionAndAnswerNotes/getUnApprovedAnswer`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
    }

    approveAnswer(data) {
        return axios.post(`${baseURL}/questionAndAnswerNotes/approve/${data.parentId}`, data.data, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
    }
    rejectAnswer(data) {
        return axios.post(`${baseURL}/questionAndAnswerNotes/reject/${data.parentId}`, data.data, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
    }

    getOrderDetailsList() {
        return axios.get(`${baseURL}/productcarts/userCartList`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
    }

    approveOrder(data) {
        return axios.post(`${baseURL}/productcarts/adminCompleteOrder`, data, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
    }
    rejectOrder(data) {
        return axios.post(`${baseURL}/productcarts/adminCancelOrder`, data, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
    }
    
}

export default AdminService;