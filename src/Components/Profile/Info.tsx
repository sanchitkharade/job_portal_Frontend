import { ActionIcon } from "@mantine/core";
import fields from "../../Data/Profile";
import { IconBriefcase, IconCheck, IconMapPin, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import SelectInput from "./SelectInput";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";

const Info = () => {
    const profile=useSelector((state:any)=>state.profile);
    const user = useSelector((state:any)=>state.user);
    const select=fields;
    const dispatch=useDispatch();
    const [edit, setEdit]=useState(false);
    const handleClick=()=>{
        if(!edit){
            setEdit(true);
            form.setValues({jobTitle: profile.jobTitle,company: profile.company,location: profile.location})
        }
        else{
            setEdit(false);
        }
    }
    const form =useForm({
        mode: 'controlled',
        initialValues: {jobTitle:'',company:'',location:''},
    });
    const handleSave=()=>{
        setEdit(false);
        let updatedProfile={...profile,...form.getValues()};
        dispatch(changeProfile(updatedProfile));
        successNotification("Success","Profile updated Successfully ")
    }
  return <>
  <div className="px-3 mt-20">
                <div className="text-3xl font-semibold flex justify-between">{user?.name} <div>
                {edit&&<ActionIcon onClick={handleSave} size="lg" variant="subtle" color="green.4" ><IconCheck className="h-4/5 w-4/5"/></ActionIcon>}
                     <ActionIcon onClick={handleClick} size="lg" variant="subtle" color={edit?"red.8":"brightSun.4"} > {edit?<IconX className="h-4/5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5" />}
                </ActionIcon></div> </div>
    {
        edit?<>
         <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="jobTitle" {...select[0]}/>
                <SelectInput form={form} name="company" {...select[1]}/>
            </div>
                <SelectInput form={form} name="location" {...select[2]}/>
        </> :<><div className="flex text-xl gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5}/>{profile.jobTitle} &bull; {profile.company}</div>
                <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} />{profile.location}</div>
            </> 
    }

               </div> 
  </>
}

export default Info
