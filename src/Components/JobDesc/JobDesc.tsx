import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

//@ts-ignore
import DOMPurify from 'dompurify';
import { card } from "../../Data/JobDescData";
import { timeago } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useEffect, useState } from "react";

const JobDesc = (props:any) => {
  const profile=useSelector((state:any) => state.profile);
  const user = useSelector((state:any)=>state.user);
  const [applied,setApplied]=useState(false);
  const dispatch=useDispatch();
  const handleSaveJob=()=>{
      let savedJobs: any = Array.isArray(profile.savedJobs) ? [...profile.savedJobs] : [];
  
      if(savedJobs?.includes(props.id)){
        savedJobs=savedJobs?.filter((id:any)=>id!==props.id);
      }
      else {
        savedJobs=[...savedJobs,props.id];
      }
      let updatedProfile={...profile,savedJobs:savedJobs};
      dispatch(changeProfile(updatedProfile));
    }
    const data=DOMPurify.sanitize(props.description);
    useEffect(()=>{
      if(props.applicants?.filter((applicant:any)=>applicant.applicantId===user.id).length>0){
        setApplied(true);
      }
      else{
        setApplied(false);
      }
    },[props])
  return (
    <div className="w-2/3 mt-4">
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
        <div className="flex flex-col gap-2 items-center">
          {(props.edit || !applied) && <Link to={`/apply-job/${props.id}`}>
            <Button color="brightSun.4" size="sm" variant="light">
              {props.edit?"Edit":"Apply"}
            </Button>
          </Link>}
          {
           !props.edit && applied && <Button color="green.8" size="sm" variant="light">
            Applied
          </Button>
          }
          {props.edit?<Button color="red.5" size="sm" variant="light">
              Delete
            </Button>:profile.savedJobs?.includes(props.id)?<IconBookmarkFilled onClick={handleSaveJob} className="text-bright-sun-400 cursor-pointer" />:<IconBookmark onClick={handleSaveJob} className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer" />}
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between">
        {
            card.map((item: any,index:any) =><div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              color="brightSun.4"
              className="!h-10 !w-10"
              variant="light"
              radius="xl"
              aria-label="Settings">
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">{props?props[item.id]:"NA"} {item.id==="packageOffered" && <>LPA</>}</div>
          </div>)
        }
        
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">
            {
                props?.skillsRequired?.map((skill:any,index:any)=><ActionIcon
                key={index}
                color="brightSun.4"
                className="!h-fit !w-fit !text-sm"
                variant="light"
                radius="xl"
                p="xs"
                aria-label="Settings">{skill}
              </ActionIcon>)
            }
        
        </div>
      </div>
      <Divider my="xl" />
      <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify" dangerouslySetInnerHTML={{__html:data}}></div>
      <Divider my="xl" />
      <div>
      <div className="text-xl font-semibold mb-5">About Company</div>
      <div className="flex  justify-between mb-3">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-lg">
            <img className="h-8" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div>
            <div className="font-medium text-lg">{props.company}</div>
            <div className=" text-mine-shaft-300">10K+ Employees</div>
          </div>
        </div>
          <Link to={`/company/${props.company}`}>
            <Button color="brightSun.4" variant="light">
              Company Page
            </Button>
          </Link>
      </div>
      <div className="text-mine-shaft-300 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo enim dolorem aperiam quo voluptate dicta natus similique voluptatem ducimus totam sed dolores provident animi esse, suscipit unde accusamus in facere impedit ea architecto adipisci! Tempora autem eos quod iure!</div>
      </div>
    </div>
  );
};
export default JobDesc;
