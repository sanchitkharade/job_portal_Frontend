import axiosInstance from "../Interceptor/AxiosInterceptor";

const createCompany = async (company: any) => {
    return axiosInstance
      .post(`/company/create`, company)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  }
const getCompany=async(name:any)=>{
    return axiosInstance.get(`/company/get/${name}`)
       .then(res=>res.data)
       .catch(err=>{throw err});
}
const updateCompany=async(company:any)=>{
    return axiosInstance.put(`/company/update`,company)
       .then(res=>res.data)
       .catch(err=>{throw err});
}
const getAllCompany=async()=>{
    return axiosInstance.get(`/company/getAll`)
       .then(res=>res.data)
       .catch(err=>{throw err});
}

export {createCompany,getCompany, updateCompany,getAllCompany};