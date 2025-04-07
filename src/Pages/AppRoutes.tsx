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
import ProtectedRoute from "../Services/ProtectedRoute";
import PublicRoute from "../Services/PublicRoute";
import AboutUs from "../Components/Footer/AboutUs";
import ContactUs from "../Components/Footer/ContactUs";
import PrivacyP from "../Components/Footer/PrivacyP";
import Help from "../Components/Footer/Help";
import Feedback from "../Components/Footer/Feedback";
import FAQ from "../Components/Footer/FAQ";
import FindCompany from "./FindCompany";
import CreateCompany from "./CreateCompany";
const AppRoutes = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Divider size="xs" mx="md" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/find-talent" element={<FindTalent />} />
          <Route path="/find-company" element={<FindCompany />} />
          <Route path="/jobs/:id" element={<JobDescPage />} />
          <Route path="/apply-job/:id" element={<ApplyJobPage />} />
          <Route
            path="/post-jobs/:id"
            element={
              <ProtectedRoute allowedRoles={["EMPLOYER"]}>
                <PostJobs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posted-jobs/:id"
            element={
              <ProtectedRoute allowedRoles={["EMPLOYER"]}>
                <PostedJobPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/job-history"
            element={
              <ProtectedRoute allowedRoles={["APPLICANT"]}>
                <JobHistoryPage />
              </ProtectedRoute>
            }
          />
          <Route path="/talent-profile/:id" element={<TalentProfile />} />
          <Route path="/company/:name" element={<CompanyPage />} />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/PrivacyPolicy" element={<PrivacyP />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/create-company" element={<CreateCompany />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
