import { Avatar, AvatarGroup, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJob from "./CompanyJob";
import CompanyEmployee from "./CompanyEmployee";


const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className=" w-36 h-36 rounded-3xl p-2 absolute -bottom-1/4 left-5 border-8 border-mine-shaft-950 bg-mine-shaft-950"
          src="/Icons/Google.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          Google
          <AvatarGroup>
            <Avatar src="avatar.png"/>
            <Avatar src="avatar1.png"/>
            <Avatar src="avatar2.png"/>
            <Avatar>+10K</Avatar> 
          </AvatarGroup>
        </div>
        <div className="flex text-xl gap-1 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          SDE &bull; Google
        </div>
        <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          Delhi
        </div>
      </div>
      <Divider my="xl" />
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
            <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
            <Tabs.Panel value="jobs"><CompanyJob/></Tabs.Panel>
            <Tabs.Panel value="employees"><CompanyEmployee/></Tabs.Panel>
            
            
        </Tabs>
      </div>
    </div>
  );
};
export default Company;
