import { useParams } from "react-router-dom";
import PostedJob from "../Components/PostedJob/PostedJob";
import PostedJobDesc from "../Components/PostedJob/PostedJobDesc";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobPostedBy } from "../Services/JobService";



const PostedJobPage=()=>{
   const {id} = useParams();
   const user=useSelector((state:any)=>state.user);
   const [jobList,setJobList] =useState<any[]>([]);
   const [job,setJob] = useState<any>({});
   useEffect(()=>{
       window.scrollTo(0,0);
       getJobPostedBy(user.id)
      .then((res)=>{
         setJobList(res);
         setJob(res.find((j:any)=>j.id===id));
      })
      .catch(err=>console.log(err));
   },[id]);
   return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
    
  
    <div className="flex gap-5">
       <PostedJob job={job} jobList={jobList}/>
       <PostedJobDesc {...job}/>
    </div>
</div>
}
export default PostedJobPage;