import { Badge, Tabs } from "@mantine/core";

import JobDesc from "../JobDesc/JobDesc";

import TalentCard from "../FindTalents/TalentCard";
import { useEffect, useState } from "react";

const PostedJobDesc=(props:any)=>{
    const [tab, setTab]=useState("overview");
    const [arr,setArr]=useState<any>([]);
    const handleTabChange=(value:any)=>{
        setTab(value);
        if(value=="applicants"){
            setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="APPLIED"));
        }
        else if(value=="invited"){
            setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="INTERVIEWING"));
        }
        else if(value=="offered"){
            setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="OFFERED"));
        }
        else if(value=="rejected"){
            setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="REJECTED"));
        }
    };
    useEffect(()=>{
        handleTabChange("overview");
    },[props]);
    return <div className="mt-5 w-3/4 md-mx:w-full px-5 md-mx:p-0">
        {props.jobTitle?<><div className="text-2xl xs-mx:text-xl font-semibold flex items-center">{props.jobTitle}<Badge variant="light" ml="sm" color="brightSun.4" size="sm">{props.jobStatus}</Badge></div>
        <div className="font-medium xs-mx:text-sm text-mine-shaft-300 mb-5">{props.location}</div>
        <div>
        <Tabs variant="outline" radius="lg" value={tab} onChange={handleTabChange}>
            <Tabs.List className="[&_button]:!text-xl font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400 sm-mx:[&_button]:!text-lg xs-mx:[&_button]:!text-base xsm-mx:[&_button]:!text-sm xs-mx:[&_button]:!px-1.5 xs-mx:[&_button]:!py-2 xs-mx:font-medium">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="overview" className="[&>div]:w-full"><JobDesc {...props} edit={true} closed={props.jobStatus=="CLOSED"} /></Tabs.Panel>
            <Tabs.Panel value="applicants"><div className="flex mt-10 flex-wrap gap-5 justify-around">
                {
                    arr?.length?arr.map((talent:any,index:any) =><TalentCard key={index} {...talent} posted={true}/>):<div className="text-2xl font-semibold">No Applicants</div>
                }
                </div></Tabs.Panel>
            <Tabs.Panel value="invited">
                <div className="flex mt-10 flex-wrap gap-5 justify-around">
                {
                    arr?.length?arr.map((talent:any,index:any) =><TalentCard key={index} {...talent} invited={true}/>):<div className="text-2xl font-semibold">No Invited Candidates</div>
                }</div></Tabs.Panel>
            <Tabs.Panel value="offered">
                <div className="flex mt-10 flex-wrap gap-5 justify-around">
                {
                    arr?.length?arr.map((talent:any,index:any) =><TalentCard key={index} {...talent} offered={true}/>):<div className="text-2xl font-semibold">No Offered Candidates</div>
                }</div></Tabs.Panel>
            <Tabs.Panel value="rejected">
                <div className="flex mt-10 flex-wrap gap-5 justify-around">
                {
                   arr?.length?arr.map((talent:any,index:any) =><TalentCard key={index} {...talent} rejected={true}/>):<div className="text-2xl font-semibold">No Rejected Candidates</div>
                }</div></Tabs.Panel>
            
            
        </Tabs>
        </div></>:<div className="text-2xl font-semibold flex min-h-[70vh] justify-center items-center">No Job Found</div>}
    </div>
}
export default PostedJobDesc;