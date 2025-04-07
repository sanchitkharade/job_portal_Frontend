import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import Company from "../Components/CompanyProfile/Company";
import Similarcompany from "../Components/CompanyProfile/Similarcompany";


const CompanyPage =()=>{
    const { name } = useParams<{ name: string }>();
    const Navigate=useNavigate();
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
    <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" my="md" onClick={()=>Navigate(-1)} variant="light">Back</Button>
  
    <div className="flex gap-5 justify-between">
       <Company name={name}/>
       <Similarcompany/>
    </div>
</div>
}
export default CompanyPage;