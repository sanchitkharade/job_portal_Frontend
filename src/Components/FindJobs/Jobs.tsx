
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Sort from "./Sort";
import { getAllJobs } from "../../Services/JobService";

const Jobs=()=>{
    const [jobList, setJobList]=useState([{}]);
    useEffect(()=>{
        getAllJobs().then((res)=>{
            setJobList(res);
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return <div className="p-5 pl-12">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Rcommended Jobs</div>
            <Sort/>
        </div>
        <div className="mt-10 flex flex-wrap gap-5">
        {
            jobList.map((job,index)=><JobCard key={index}{...job}/>)
        }
        </div>
    </div>
}
export default Jobs;