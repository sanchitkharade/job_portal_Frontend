import {Divider } from "@mantine/core";
import ApplyJobForm from "./ApplyJobForm";
import { timeago } from "../../Services/Utilities";

const ApplyJobCom=(props:any)=>{
    
    return <div className="w-2/3 bs-mx:w-4/5 sm-mx:w-full mx-auto">
        
        <div className="flex  justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl flex shrink-0">
            <img className="h-14 xs-mx:h-10 xs-mx:w-10" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div>
            <div className="font-semibold text-2xl xs-mx:text-xs">{props.jobTitle}</div>
            <div className="text-lg 2text-mine-shaft-300 flex-wrap xs-mx:text-base">
            <span>{props.company} &#x2022; </span><span> {timeago(props.posttime||"")} &#x2022;</span> <span>{props.applicants?props.applicants.length:0} Applicants</span>
            </div>
          </div>
        </div>
      </div>
        <Divider my="xl"/>
        <div className="text-xl font-semibold mb-5">Submit Your Application</div>
        <ApplyJobForm/>
    </div>

}
export default ApplyJobCom;