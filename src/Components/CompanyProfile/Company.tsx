import { Avatar, AvatarGroup, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJob from "./CompanyJob";
import { useEffect, useState } from "react";
import { getCompany } from "../../Services/CompanyService";
import { getAllJobs } from "../../Services/JobService";


const Company = (props:any) => {
  const [company, setCompany] = useState<{ [key: string]: any } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [jobList, setJobList]=useState([{}]);

  useEffect(() => {
    getCompany(props.name)
      .then((res) => {
        setCompany(res);
        setLoading(false); // Store fetched data in state
      })
      .catch((err) => {
        console.error("Error fetching company:", err);
        setError(err.message || "Failed to fetch data");
      })
        
      getAllJobs().then((res)=>{
        setJobList(res.filter((job:any)=>job.company==props.name));
    }).catch((err)=>{
        console.log(err);
    })
  }, [props]);

  if (loading) return <p>Loading company details...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!company) return <p>No company data available.</p>;

  return (
    <div className="w-3/4">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className=" w-36 h-36 rounded-3xl p-2 absolute -bottom-1/4 left-5 border-8 border-mine-shaft-950 bg-mine-shaft-950"
          src={company.picture?`data:image/jpeg;base64,${company.picture}`:"/avatar.png"} alt=""
          
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          {company.name}
          <AvatarGroup>
            <Avatar src="avatar.png"/>
            <Avatar src="avatar1.png"/>
            <Avatar src="avatar2.png"/>
            <Avatar>+10K</Avatar> 
          </AvatarGroup>
        </div>
        <div className="flex text-xl gap-1 items-center">
        </div>
        <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          {company.headquarter}
        </div>
      </div>
      <Divider my="xl" />
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
            <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="about"><AboutComp company={company}/></Tabs.Panel>
            <Tabs.Panel value="jobs"><CompanyJob jobList={jobList}/></Tabs.Panel>
            
            
            
        </Tabs>
      </div>
    </div>
  );
};
export default Company;
