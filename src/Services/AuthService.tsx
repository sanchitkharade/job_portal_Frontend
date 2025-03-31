import axios from "axios"
import { removeUser } from "../Slices/UserSlice";
const base_url = "https://job-portal-backend-2-pgt4.onrender.com/auth/";
const loginUser=async(login:any)=>{
    return axios.post(`${base_url}login`,login)
    .then(res=>res.data)
    .catch(err=>{throw err});
}
const navigateToLogin=(navigate:any)=>{
    localStorage.removeItem('token');
    removeUser();
    navigate('/login');
}
export { loginUser,navigateToLogin};