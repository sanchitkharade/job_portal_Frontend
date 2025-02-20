import { IconArrowLeft, IconBrandGravatar } from "@tabler/icons-react";

import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Components/SignupLogin/login";
import Signup from "../Components/SignupLogin/Signup";
import { Button } from "@mantine/core";

const SignupPage=()=>{
    const location = useLocation()
    const navigate=useNavigate();
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden relative">
    <Button size="sm" className="!absolute left-5 z-10" leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" my="lg" onClick={()=>navigate("/")} variant="light">Home</Button>
    <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname==='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
        <Login/>
       <div className={`w-1/2 h-full transition-all ease-in-out duration-1000 ${location.pathname==="/signup"? "rounded-r-[200px]" : "rounded-l-[200px]"} bg-mine-shaft-900 flex flex-col gap-5 items-center justify-center`}>
       <div  className="flex gap-1 items-center text-bright-sun-400">
        <IconBrandGravatar className="h-16 w-16" />
        <div className="text-6xl font-semibold cursor-pointer" >JobAlchemy</div>
      </div>
      <div className="text-2xl text-mine-shaft-200 font-semibold">Find Your Dream Job</div>
       </div>
    <Signup/>
    </div>
</div>
}
export default SignupPage;