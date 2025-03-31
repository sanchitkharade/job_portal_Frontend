
import { removeUser } from "../Slices/UserSlice";
import axiosInstance from "../Interceptor/AxiosInterceptor";

const base_url = "http://localhost:8080/auth/";

const loginUser=async(login:any)=>{
    return axiosInstance.post(`/auth/login`,login)
    .then(res=>res.data)
    .catch(err=>{throw err});
}

const navigateToLogin=(navigate:any)=>{
    localStorage.removeItem('token');
    removeUser();
    navigate('/login');
}
export { loginUser,navigateToLogin};