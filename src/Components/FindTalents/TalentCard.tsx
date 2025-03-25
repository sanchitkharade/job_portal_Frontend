import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProfile } from "../../Services/ProfileService";
import { changeAppStatus } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { formatInterviewTime, openBase64pdf } from "../../Services/Utilities";


const TalentCard = (props: any) => {
  const {id} = useParams();
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<any>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [app,{ open:openApp, close:closeApp }] = useDisclosure(false);
  const ref = useRef<HTMLInputElement>(null);
  const [profile,setProfile]=useState<any>({});
  useEffect(()=>{
    if(props.applicantId)getProfile(props.applicantId).then((res)=>{
      setProfile(res);
    }).catch((err)=>{
      console.log(err);
    });
    else setProfile(props);
  },[props])
  const handleOffer=(status:string)=>{
    let interview:any={id,applicantId:profile?.id,applicationStatus:status};
    if(status=="INTERVIEWING"){
    const [hours,minutes]=time.split(":").map(Number);
    date?.setHours(hours,minutes);
    interview={...interview,interviewTime:date};
    }

    changeAppStatus(interview).then((res) =>{
    if(status=="INTERVIEWING")successNotification("Interview Scheduled","Interview Scheduled successfully");
    else if (status=="OFFERED")successNotification("Offered","Offere has been sent successfully");
    else successNotification("Rejected","Applicant has been Rejected");
      window.location.reload();
    }).catch((err) =>{
      errorNotification("Error", err.respons?.data?.errorMessage);
    });
  };
  return (
    <div className="bg-mine-shaft-900 p-4 w-96 bs-mx:w-[48%] md-mx:w-full flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 mb-5 mr-12">
      <div className="flex  justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar className="h-6 w-6" size="lg" src={profile?.picture?`data:image/jpeg;base64,${profile?.picture}`:"/avatar.png"}  alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm 2text-mine-shaft-300">
              {profile?.jobTitle} &bull; {profile?.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2 flex-wrap">
        {
            profile?.skills?.map((skill:any,index:any)=>index<4&&<div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{skill}</div>
                )
        }
       
      </div>
      <Text className="text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
        {profile.about}
      </Text>
      <Divider size="xs" color="mineShaft.7" />
      {
        props.invited?<div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth className="w-5 h-5"/>Interview: {formatInterviewTime(props.interviewTime)}
        </div>:<div className="flex justify-between">
        <div className=" text-mine-shaft-300">
          {props.totalExp?`Experience : ${props.totalExp} Years`:"Fresher"}
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
         {profile?.location}
        </div>
      </div>
      }
      
      <Divider size="xs" color="mineShaft.7" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
      {
        !props.invited &&<>
        <Link to={`/talent-profile/${profile?.id}`}>
      <Button color="brightSun.4" variant="outline" fullWidth>Profile</Button>
      </Link>
      <div>
      {props.posted?<Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5 items-center"/>} className="!bg-bright-sun-400 !text-mine-shaft-950" variant="unstyled" fullWidth>Schedule</Button>:<Button className="!bg-bright-sun-400 !text-mine-shaft-950" variant="unstyled" fullWidth>Message</Button>}</div>
        </>
      }
      {
        props.invited && <>
        <div><Button color="brightSun.4" onClick={()=>handleOffer("OFFERED")} variant="outline" fullWidth>Accept</Button></div>
        <div><Button className="!bg-bright-sun-400 !text-mine-shaft-950" variant="light" onClick={()=>handleOffer("REJECTED")} fullWidth>Reject</Button></div>
        </>
      }
      <div>{(props.invited || props.posted) && <Button className="!bg-bright-sun-400 !text-mine-shaft-950" variant="filled" onClick={openApp} fullWidth autoContrast>View Application</Button>}</div>
      <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div className="flex flex-col gap-4">
        <DateInput
      value={date}
      minDate={new Date()}
      onChange={setDate}
      label="Date"
      placeholder=" Enter Date"
    />
    <TimeInput label="Time" value={time} onChange={(e)=>setTime(e.currentTarget.value)} ref={ref} onClick={()=>ref.current?.showPicker()} />
    <Button onClick={()=>handleOffer("INTERVIEWING")} className="!bg-bright-sun-400 !text-mine-shaft-950" variant="unstyled" fullWidth>Schedule</Button>
        </div>
      </Modal>
      </div>
      <Modal opened={app} onClose={closeApp} title="Application" centered>
        <div className="flex flex-col gap-4">
        <div>Email : &emsp; <a className="text-bright-sun-400 hover:underline cursor-pointer text-center" href={`mailto:${props.email}`}>{props.email}</a> </div>
        <div>Website : &emsp; <a target="_blank" className="text-bright-sun-400 hover:underline cursor-pointer text-center" href={props.website}>{props.website}</a> </div>
        <div>Resume : &emsp; <span className="text-bright-sun-400 hover:underline cursor-pointer text-center" onClick={()=>openBase64pdf(props.resume)}>{props.name}</span> </div>
        <div>Cover Letter : &emsp; <div>{props.coverLetter}</div> </div>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
