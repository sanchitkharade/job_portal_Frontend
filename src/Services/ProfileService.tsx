import axios from "axios";
const base_url = "http://localhost:8080/profiles/";

const getProfile=async(id:any)=>{
    return axios.get(`${base_url}get/${id}`)
       .then(res=>res.data)
       .catch(err=>{throw err});
}
const updateProfile=async(profile:any)=>{
    return axios.put(`${base_url}update`,profile)
       .then(res=>res.data)
       .catch(err=>{throw err});
}
const getAllProfile=async()=>{
    return axios.get(`${base_url}getAll`)
       .then(res=>res.data)
       .catch(err=>{throw err});
}

export {getProfile, updateProfile,getAllProfile};