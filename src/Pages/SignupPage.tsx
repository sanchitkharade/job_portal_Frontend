import { IconArrowLeft, IconBrandGravatar } from "@tabler/icons-react";

import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Components/SignupLogin/login";
import Signup from "../Components/SignupLogin/Signup";
import { Button } from "@mantine/core";

const SignupPage=()=>{
    const location = useLocation()
    const navigate=useNavigate();
    return <div className="w-[100vw] h-[100vh] sm-mx:overflow-y-auto overflow-hidden relative">
    <Button size="sm" className="!absolute left-5 z-10" leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" my="lg" onClick={()=>navigate("/")} variant="light">Home</Button>
    <div className={`flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-1000  ${location.pathname==='/signup'?'-translate-x-1/2 sm-mx:-translate-x-full':'translate-x-0'}`}>
        <Login/>
       <div className={`w-1/2 h-[100vh] sm-mx:hidden flex  sm-mx:min-h-full transition-all ease-in-out duration-1000 ${location.pathname==="/signup"? "rounded-r-[200px]" : "rounded-l-[200px]"} bg-mine-shaft-900 `}>
       <div  className="flex gap-1 items-center text-bright-sun-400 ">
        <div>
        <div className="flex"><IconBrandGravatar className="h-16 w-16" />
        <div className="text-6xl bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl font-semibold cursor-pointer " >JobAlchemy</div></div>
        <div className=" text-2xl flex justify-center bs-mx:text-xl md-mx:text-lg text-mine-shaft-200 font-semibold ">Find Your Dream Job</div>
        </div>
      </div>
       
       </div>
    <Signup/>
    </div>
</div>
}
export default SignupPage;