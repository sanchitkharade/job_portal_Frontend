
import { useParams } from "react-router-dom";
import JobCard from "../FindJobs/JobCard";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Services/JobService";

const RecomJob=()=>{
    const {id}=useParams();
    const [jobList,setJobList]=useState<any>(null);
    useEffect(()=>{
        getAllJobs().then((res)=>{
            setJobList(res);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);
    return <div>
    <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
    <div className="flex flex-col flex-wrap gap-5 justify-between">
        {jobList?.map((job:any,index:any)=>index<6 && id!=job.id &&<JobCard key={index} {...job} />)}
    </div>
    </div>
}
export default RecomJob;