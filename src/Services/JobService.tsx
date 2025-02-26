import axios from "axios";
const base_url = "http://localhost:8080/jobs/";

const postJob = async (job: any) => {
  return axios
    .post(`${base_url}post`, job)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const getAllJobs = async () => {
  return axios
    .get(`${base_url}getAll`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const getJob = async (id: any) => {
  return axios
    .get(`${base_url}get/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const applyJob = async (id: any, applicant: any) => {
  return axios
    .post(`${base_url}apply/${id}`, applicant)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const getJobPostedBy = async (id: any) => {
  return axios
    .get(`${base_url}postedBy/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const changeAppStatus = async (application: any) => {
  return axios
    .post(`${base_url}changeAppStatus`, application)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export {
  postJob,
  getAllJobs,
  getJob,
  applyJob,
  getJobPostedBy,
  changeAppStatus,
};
