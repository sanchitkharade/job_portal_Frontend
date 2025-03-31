
import axiosInstance from "../Interceptor/AxiosInterceptor";
import { removeUser } from "../Slices/UserSlice";

const loginUser=async(login:any)=>{
    return axiosInstance.post(`/login`,login)
    .then(res=>res.data)
    .catch(err=>{throw err});
}

const navigateToLogin=(navigate:any)=>{
    localStorage.removeItem('token');
    removeUser();
    navigate('/login');
}
export { loginUser,navigateToLogin};