import axiosInstance from "../Interceptor/AxiosInterceptor";


const getProfile=async(id:any)=>{
    return axiosInstance.get(`/profiles/get/${id}`)
       .then(res=>res.data)
       .catch(err=>{throw err});
}
const updateProfile=async(profile:any)=>{
    return axiosInstance.put(`/profiles/update`,profile)
       .then(res=>res.data)
       .catch(err=>{throw err});
}
const getAllProfile=async()=>{
    return axiosInstance.get(`/profiles/getAll`)
       .then(res=>res.data)
       .catch(err=>{throw err});
}

export {getProfile, updateProfile,getAllProfile};