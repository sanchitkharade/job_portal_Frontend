import { Burger, Button, Drawer } from "@mantine/core";
import { IconBrandGravatar, IconX } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../Services/ProfileService";
import { setProfile } from "../../Slices/ProfileSlice";
import NotiMenu from "./NotiMenu";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../../Slices/UserSlice";
import { setupResponseInterceptor } from "../../Interceptor/AxiosInterceptor";
import { useDisclosure } from "@mantine/hooks";

const Header = () => {
  const links = [
    {name: "Find Jobs",url:"find-jobs"},
    {name: "Find Talent",url:"find-talent"},
    {name: "Post Jobs",url:"post-jobs/0"},
    {name: "Posted Job",url:"posted-jobs/0"},
    {name: "Job History",url:"job-history"},
    
   ] 

  const dispatch=useDispatch();
  const [opened, { open, close }] = useDisclosure(false);
  const navigate=useNavigate();
  const location = useLocation();  
    const user=useSelector((state:any)=>state.user);
    const token = useSelector((state:any)=>state.jwt);

    useEffect(()=>{
      setupResponseInterceptor(navigate);
    },[navigate])
    useEffect(() => {
      if(token!=""){
        if(localStorage.getItem("token")!=""){
        const decoded=jwtDecode(localStorage.getItem("token")||"");
        dispatch(setUser({...decoded,email:decoded.sub}));
        }
      }
        if(user?.profileId)getProfile(user?.profileId).then((data) =>{
            dispatch(setProfile(data));
        }).catch((err) =>{
                console.log(err);
            });
    }, [token,navigate]);
  
  return (location.pathname!=="/signup" && location.pathname!=="/login") ? <div className="w-full px-6 bg-mine-shaft-950 text-white h-20 flex justify-between items-center font-['poppins']">
      <Link to="/" className="flex gap-1 items-center text-bright-sun-400">
        <IconBrandGravatar className="h-8 w-8" />
        <div className="xs-mx:hidden text-3xl font-semibold cursor-pointer" >JobAlchemy</div>
      </Link>
      {NavLinks()}
      <div className="flex gap-3 items-center">
        
        {user?<ProfileMenu/>:<Link to={"/login"}>
        <Button variant="subtle" color="brightSun.4">Login</Button>
        </Link>}
        {/* <div className="bg-mine-shaft-900 p-1.5 rounded-full"><IconSettings /></div> */}
        {user?<NotiMenu/>:<></>}
        {

        }
        <Burger className="bs:hidden" opened={opened} onClick={open} aria-label="Toggle navigation" />
        <Drawer size="xs" overlayProps={{backgroundOpacity:0.5,blur:4}} position="right" opened={opened} onClose={close} closeButtonProps={{icon:<IconX size={30}/>}}>
        <div className="flex flex-col gap-5 items-center">

        {
          links.map((link, index) => <div className={` h-full flex items-center`} key={index}>
          <Link className="hover:text-bright-sun-400 text-xl" key={index} to={link.url}>{link.name}</Link>
        </div>)
        }
        </div>
      </Drawer>
      </div>
    </div>:<></>
 
};
export default Header;
