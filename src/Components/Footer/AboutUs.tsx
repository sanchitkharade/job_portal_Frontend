import { Avatar, AvatarGroup, Button, Divider, Tabs } from '@mantine/core'
import { IconArrowLeft, IconMapPin } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    const companyData={
        Name: "JobAlchemy",
        Overview: "JobAlchemy is an innovative job portal designed to bridge the gap between job seekers and employers. The platform facilitates seamless job searching, job posting, and talent discovery. With a user-friendly interface and AI-powered recommendations, JobAlchemy ensures that candidates find the best opportunities while employers connect with the right talent efficiently.",
        Industry: "I Recruitment & Job Portal, Software Services",
        Website: "https://jobalchemy.onrender.com",
        Size: "1-2 Employees",
        Headquarters: "Pune, Maharashtra, India",
        Specialties: [
          "Seamless Job Posting",
          "Talent Discovery",
          "Resume Building & Optimization",
          "Software",
          "Candidate Skill Assessment",
          "User-Friendly Dashboard ",
          "Instant Notifications",
        ]
      }
      const company :{[key:string]:any}=companyData;
    const navigate=useNavigate();
  return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
    <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" my="md" onClick={()=>navigate(-1)} variant="light">Back</Button>
  
    <div className="flex gap-5 justify-between">
    <div className="w-3/4">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className=" w-36 h-36 rounded-3xl p-2 absolute -bottom-1/4 left-5 border-8 border-mine-shaft-950 bg-mine-shaft-950"
          src="/logo1.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          JobAlchemy
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
          PUNE
        </div>
      </div>
      <Divider my="xl" />
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
            <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="about"><div className="flex flex-col gap-5">
        {
            Object.keys(company).map((key,index)=>key!=='Name' && <div key={index}><div className="text-xl mb-3 font-semibold">{key}</div>
           {key!=='Website' && <div className="text-sm text-mine-shaft-300 text-justify">{key!=="Specialties"? company[key]:company[key].map((item:string,index:number)=><span key={index}>&bull; {item} </span>)}</div>}
           {key==='Website' && <a href={company[key]} rel="noreferrer" target="_blank" className="text-sm text-bright-sun-400 text-justify">{company[key]}</a>}
        </div>)
        }
    </div></Tabs.Panel>
            
            
            
        </Tabs>
      </div>
    </div>
    </div>
</div>
  
}

export default AboutUs
