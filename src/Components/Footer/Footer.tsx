import { IconBrandFacebook, IconBrandGravatar, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconMail } from "@tabler/icons-react";

import { useLocation, useNavigate } from "react-router-dom";


const Footer = () => {
  const location = useLocation();
  const navigate=useNavigate();
  return location.pathname!=="/signup" && location.pathname!=="/login" ? <div className="pt-20 pb-5 flex flex-wrap gap-8 p-4 justify-around bg-mine-shaft-950 font-['poppins']">
      <div className="w-1/4 sm-mx:w-1/3 xs-mx:w-1/2 xsm-mx:w-full flex flex-col gap-4">
        <div className="flex gap-1 items-center text-bright-sun-400">
          <IconBrandGravatar className="h-6 w-6" />
          <div className="text-xl font-semibold">JobAlchemy</div>
        </div>
        <div className="text-sm text-mine-shaft-300 ">Job Portal with user Profiles,Skill Updates, Certification, Work Experience and Admin Job Postings.</div>
        <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700">
            <div><a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=j2055923@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-red-400 transition-all duration-300"
            title="Send us an Email 📧"
          >
            <IconMail  />
          </a></div>
            <div><a
            href="https://www.instagram.com/sanch0_17"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-pink-300 transition-all duration-300"
            title="Follow us on Instagram 📸"
          >
            <IconBrandInstagram  />
          </a></div>
            <div><a
            href="https://www.linkedin.com/in/sanchit-kharade"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-blue-300 transition-all duration-300"
            title="Connect on LinkedIn 💼"
          >
            <IconBrandLinkedin  />
          </a></div>
        </div>
      </div>
      <div>
            <div className="text-lg font-semibold mb-4 text-bright-sun-400">Product</div>
            <div  className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out" onClick={()=>navigate("/find-jobs")}>Find Job</div>
            <div  className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out" onClick={()=>navigate("/find-company")}>Find Company</div>
            <div  className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out" onClick={()=>navigate("/find-talent")}>Find Talent</div>
        </div>
      <div>
            <div className="text-lg font-semibold mb-4 text-bright-sun-400">Company</div>
            <div  className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out" onClick={()=>navigate("/AboutUs")}>About Us</div>
            <div  className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out" onClick={()=>navigate("/ContactUs")}>Contact Us</div>
            <div  className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out" onClick={()=>navigate("/PrivacyPolicy")}>Privacy Policy</div>
           
        </div>
      <div>
            <div className="text-lg font-semibold mb-4 text-bright-sun-400" >Support</div>
            <div  className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out" onClick={()=>navigate("/Help")}>Help & Support</div>
            <div  className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out" onClick={()=>navigate("/Feedback")}>Feedback</div>
            <div  className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out" onClick={()=>navigate("/FAQ")}>FAQ's</div>
        </div>
    </div>:<></>
  
};
export default Footer;
