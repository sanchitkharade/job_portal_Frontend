import axiosInstance from "../Interceptor/AxiosInterceptor";

const registerUser = async (user: any) => {
  return axiosInstance
    .post(`/users/register`, user)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const loginUser = async (login: any) => {
  return axiosInstance
    .post(`/users/login`, login)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
const sendOtp = async (email: any) => {
  return axiosInstance
    .post(`/users/sendOtp/${email}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
const verifyOtp = async (email: any, otp: any) => {
  return axiosInstance
    .get(`/users/verifyOtp/${email}/${otp}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
const changePass = async (email: any, password: any) => {
  return axiosInstance
    .post(`/users/changePass`, { email, password })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export { registerUser, loginUser, sendOtp, verifyOtp, changePass };
