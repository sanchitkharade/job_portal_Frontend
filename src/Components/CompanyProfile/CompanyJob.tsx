
import JobCard from "../FindJobs/JobCard";



const CompanyJob=(props:any)=>{

    return <div className="flex mt-10 flex-wrap gap-3">
        {
            props.jobList.map((job:any,index:any)=><JobCard key={index}{...job}/>)
        }
    </div>
}
export default CompanyJob;