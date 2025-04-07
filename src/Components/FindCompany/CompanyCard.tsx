import { Avatar, Button, Divider, Text } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import {  useNavigate } from "react-router-dom";


const CompanyCard = (props: any) => {
  const navigate=useNavigate();
 
  return (
    <div className="bg-mine-shaft-900 p-4 w-96 bs-mx:w-[48%] md-mx:w-full flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 mb-5 mr-12">
      <div className="flex  justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar className="h-6 w-6" size="lg" src={props?.picture?`data:image/jpeg;base64,${props?.picture}`:"/avatar.png"}  alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm flex text-mine-shaft-300 gap-1">
            <IconMapPin className="h-5 w-5" stroke={1.5} />
            {props?.headquarter}
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex gap-2 flex-wrap">
        {
            props?.specialitis?.map((skill:any,index:any)=>index<4&&<div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{skill}</div>
                )
        }
       
      </div>
      <Text className="text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
        {props.overview}
      </Text>
      <Divider size="xs" color="mineShaft.7" />
      {
        <div className="flex justify-between">
        
        <div className="flex gap-1 text-xs text-mine-shaft-300 items-center">
           &bull; {props?.industry}
        </div>
      </div>
      }
      
      <Button autoContrast onClick={()=>navigate(`/company/${props.name}`)}>View Company</Button>
    </div> 
  ) 
}
export default CompanyCard;
