import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import {  useNavigate } from "react-router-dom";

import { profile } from "../Data/TalentData";
import Recomtalent from "../Components/TalentProfile/RecomTalent";
import Profile from "../Components/TalentProfile/Profile";
import { useEffect, useState } from "react";
import { getAllProfile } from "../Services/ProfileService";


const TalentProfile = () => {
  const navigate=useNavigate();
  const [talents, setTalents] =useState<any[]>([]);
  useEffect(()=>{
    getAllProfile().then((res)=>{
      setTalents(res);
    }).catch((err)=>{
      console.log(err)
    });
  },[])
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Button
          leftSection={<IconArrowLeft size={20} />}
          color="brightSun.4"
          variant="light"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      <div className="flex gap-5 lg-mx:flex-wrap mt-3">
        <Profile {...profile} />
        <Recomtalent talents={talents}/>
      </div>
    </div>
  );
};
export default TalentProfile;
