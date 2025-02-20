import { Avatar, Divider, FileInput, Overlay } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { changeProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certification from "./Certification";
import { useHover } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { successNotification } from "../../Services/NotificationService";
import { getBase64 } from "../../Services/Utilities";


const Profile = ()=>{
    const dispatch=useDispatch();  
    const profile=useSelector((state:any)=>state.profile);
    const {hovered, ref}=useHover();
    const handleFileChange =async (image:any) =>{
        let picture:any=await getBase64(image);
        let updatedProfile={...profile, picture: picture.split(',')[1]};
        dispatch(changeProfile(updatedProfile));
        successNotification("success","Profile picture updated Successfully ")

    }
    
    return <div className="w-4/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <div ref={ref} className="absolute -bottom-1/3 left-3 flex items-center justify-center">
            <Avatar className="!w-48 !h-48 border-8 border-mine-shaft-950 rounded-full" src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.png"} alt=""/>
            {hovered &&<Overlay className="!rounded-full" color="#000" backgroundOpacity={0.85}/>}
            {hovered && <IconEdit className="absolute z-[300] !w-12 !h-12"/>}
            {hovered && <FileInput onChange={handleFileChange} className="absolute [&_*]:!rounded-full z-[301] [&_*]:!h-full !w-full" variant="transparent" accept="image/png,image/jpeg"/>}

            </div>
            </div>
            <Info/>
            <Divider  my="xl"/>
            <About/>
            <Divider mx="xs" my="xl"/>
            <Skills/>
            <Divider mx="xs" my="xl"/>
            <Experience/>
            <Divider mx="xs" my="xl"/>
            <Certification/>
    </div>
}
export default Profile; 