import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const NavLinks=()=>{
    const links = [
       {name: "Find Jobs",url:"find-jobs"},
       {name: "Find Talent",url:"find-talent"},
       {name: "Find Company",url:"find-company"},
       {name: "Post Jobs",url:"post-jobs/0"},
       {name: "Posted Job",url:"posted-jobs/0"},
       {name: "Job History",url:"job-history"},
       
      ] 
    const user=useSelector((state:any)=>state.user);
    const location = useLocation();
    return <div className="flex bs-mx:!hidden gap-5 text-mine-shaft-300 h-full items-center">
        <div className={`${location.pathname==="/"+"find-jobs"?"text-bright-sun-400 border-bright-sun-400 ":"border-transparent"}border-t-[3px] h-full flex items-center`} >
          <Link to={"find-jobs"}>Find Jobs</Link>
        </div>
        <div className={`${location.pathname==="/"+"find-talent"?"text-bright-sun-400 border-bright-sun-400 ":"border-transparent"}border-t-[3px] h-full flex items-center`} >
          <Link to={"find-talent"}>Find Talent</Link>
        </div>
        <div className={`${location.pathname==="/"+"find-company"?"text-bright-sun-400 border-bright-sun-400 ":"border-transparent"}border-t-[3px] h-full flex items-center`} >
          <Link to={"find-company"}>Find Company</Link>
        </div>
        {user?.accountType == "EMPLOYER" &&<div className={`${location.pathname==="/"+"post-jobs/0"?"text-bright-sun-400 border-bright-sun-400 ":"border-transparent"}border-t-[3px] h-full flex items-center`} >
          <Link to={"post-jobs/0"}>Post Jobs</Link>
        </div>}
        {user?.accountType == "EMPLOYER" &&<div className={`${location.pathname==="/"+"posted-jobs/0"?"text-bright-sun-400 border-bright-sun-400 ":"border-transparent"}border-t-[3px] h-full flex items-center`} >
          <Link to={"posted-jobs/0"}>Posted Job</Link>
        </div>}
        {user?.accountType == "APPLICANT" &&<div className={`${location.pathname==="/"+"job-history"?"text-bright-sun-400 border-bright-sun-400 ":"border-transparent"}border-t-[3px] h-full flex items-center`} >
          <Link to={"job-history"}>Job History</Link>
        </div>}
        
</div>
}
export default NavLinks;