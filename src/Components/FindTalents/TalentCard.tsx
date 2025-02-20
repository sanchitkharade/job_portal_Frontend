import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const TalentCard = (props: any) => {
  const [value, setValue] = useState<Date | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 mb-5 mr-12">
      <div className="flex  justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar className="h-6 w-6" size="lg" src={`/${props.image}.png`} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm 2text-mine-shaft-300">
              {props.role} &bull; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2">
        {
            props.topSkills?.map((skill:any,index:any)=><div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{skill}</div>
                )
        }
       
      </div>
      <Text className="text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
        {props.about}
      </Text>
      <Divider size="xs" color="mineShaft.7" />
      {
        props.invited?<div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth className="w-5 h-5"/>Interview: August 27, 2024 10:00 AM
        </div>:<div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          &#8377;{props.expectedCtc}
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
         {props.locaton}
        </div>
      </div>
      }
      
      <Divider size="xs" color="mineShaft.7" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
      {
        !props.invited &&<>
        <Link to="/talent-profile">
      <Button color="brightSun.4" variant="outline" fullWidth>Profile</Button>
      </Link>
      <div>
      {props.posted?<Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5 items-center"/>} className="!bg-bright-sun-400 !text-mine-shaft-950" variant="unstyled" fullWidth>Schedule</Button>:<Button className="!bg-bright-sun-400 !text-mine-shaft-950" variant="unstyled" fullWidth>Message</Button>}</div>
        </>
      }
      {
        props.invited && <>
        <div><Button color="brightSun.4" variant="outline" fullWidth>Accept</Button></div>
        <div><Button className="!bg-bright-sun-400 !text-mine-shaft-950" variant="unstyled" fullWidth>Reject</Button></div>
        </>
      }
      
      </div>
      <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div className="flex flex-col gap-4">
        <DateInput
      value={value}
      minDate={new Date()}
      onChange={setValue}
      label="Date"
      placeholder=" Enter Date"
    />
    <TimeInput label="Time" ref={ref} onClick={()=>ref.current?.showPicker()} />
    <Button className="!bg-bright-sun-400 !text-mine-shaft-950" variant="unstyled" fullWidth>Schedule</Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
