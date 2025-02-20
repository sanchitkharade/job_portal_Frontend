import { Button, LoadingOverlay, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/UserService";
import { loginValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { setUser } from "../../Slices/UserSlice";

const form={
  email: "",
  password: ""
}
const Login=()=>{
  const [loading,setLoading]=useState(false);
  const dispatch=useDispatch();
  const [data,setData]=useState<{[key:string]:string}>(form);
  const [formErrors,setFormErrors]=useState<{[key:string]:string}>(form);
  const [opened, { open, close }] = useDisclosure(false);
  const navigate=useNavigate();

    const handleChange=(e:any)=>{
      setFormErrors({...formErrors,[e.target.name]:""});
      setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e:any)=>{
      
      let valid = true, newFormError:{[key:string]:string}={};
        for(let key in data){
            newFormError[key]=loginValidation(key,data[key]);
            if(newFormError[key]) valid=false;
        }
        setFormErrors(newFormError);
        if(valid){
          setLoading(true);
          loginUser(data).then((res)=>{
            successNotification("Login successful","Redirect to Homepage...");
            setTimeout(() => {
              setLoading(false);
              dispatch(setUser(res));
              navigate("/")
            }, 4000);
        }).catch((err)=>{
          setLoading(false);
          console.log(err);
          notifications.show({
              title: 'Login Failed',
              message: err.response.data.errorMessage,
              withCloseButton:true,
              icon:<IconX style={{width:"90%",height:"90%"}}/>,
              color:"red",
              withBorder:true,
              className:"!border-green-500"
            })
      });
        }
       
    
    }
    return <><LoadingOverlay
    visible={loading}
    zIndex={1000}
    overlayProps={{ radius: 'sm', blur: 2 }}
    loaderProps={{ color: 'brightSun.4', type: 'bars' }}
  />
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
    <div className="text-2xl font-semibold">Log in</div>
    <TextInput withAsterisk value={data.email} error={formErrors.email} onChange={handleChange} name="email"
    leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
    label="Email"
    placeholder="Your email"/>
     <PasswordInput value={data.password} error={formErrors.password} onChange={handleChange}  name="password"
     leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
  label="Password"
  withAsterisk
  placeholder="Enter Password"/>
    
<Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Login</Button>
<div className="mx-auto">Don't have an Account? <span className="text-bright-sun-400 hover:underline cursor-pointer" onClick={()=>{navigate("/signup");setFormErrors(form);setData(form)}}>Sign up</span> </div>

<div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center">Forget Password</div>
</div>
<ResetPassword opened={opened} close={close}/>
</>
}
export default Login;