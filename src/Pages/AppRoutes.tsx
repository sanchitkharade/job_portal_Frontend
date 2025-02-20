
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Divider } from "@mantine/core";
import Header from "../Components/Header/Header";
import FindJobs from "./FindJobs";
import FindTalent from "./FindTalent";
import JobDescPage from "./JobDescPage";
import ApplyJobPage from "./ApplyJobPage";
import PostJobs from "./PostJobs";
import PostedJobPage from "./PostedJobPage";
import JobHistoryPage from "./JobHistoryPage";
import TalentProfile from "./TalentProfile";
import CompanyPage from "./CompanyPage";
import SignupPage from "./SignupPage";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";
const AppRoutes = () => {
    const user=useSelector((state:any)=>state.user)
   return <BrowserRouter>
    <div className="relative">
    <Header/>
    <Divider size="xs" mx="md"/>
    <Routes>
    <Route path='/find-jobs' element={<FindJobs/>}/>
      <Route path='/find-talent' element={<FindTalent/>}/>
      <Route path='/jobs/:id' element={<JobDescPage/>}/>
      <Route path='/apply-job/:id' element={<ApplyJobPage/>} />
      <Route path='/post-jobs' element={<PostJobs/>}/>
      <Route path='/posted-job' element={<PostedJobPage/>}/>
      <Route path='/job-history' element={<JobHistoryPage/>}/>
      <Route path='/talent-profile' element={<TalentProfile/>}/>
      <Route path='/company/:name' element={<CompanyPage/>}/>
      <Route path='/signup' element={user?<Navigate to="/"/>:<SignupPage/>}/>
      <Route path='/login' element={user?<Navigate to="/"/>:<SignupPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='*' element={<HomePage/>} />
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
}

export default AppRoutes;
