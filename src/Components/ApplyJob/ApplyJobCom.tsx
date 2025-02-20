import {Divider } from "@mantine/core";
import ApplyJobForm from "./ApplyJobForm";
import { timeago } from "../../Services/Utilities";

const ApplyJobCom=(props:any)=>{
    
    return <div className="w-2/3 mx-auto">
        
        <div className="flex  justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-lg">
            <img className="h-14" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div>
            <div className="font-semibold text-2xl">{props.jobTitle}</div>
            <div className="text-lg 2text-mine-shaft-300">
              {props.company} &#x2022; {timeago(props.posttime)} &#x2022; {props.applicants?props.applicants.length:0} Applicants
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