import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { errorNotification, successNotification } from "../../Services/NotificationService";

const form={
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT"
}
const Signup=()=>{
    const [data,setData]=useState<{[key:string]:string}>(form);
    const [formErrors,setFormErrors]=useState<{[key:string]:string}>(form);
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const handleRadioChange = (value: string) => {
      setData({ ...data, accountType: value });
  };
    const handleChange=(e:any)=>{
        let name=e.target.name, value=e.target.value;
        setData({...data,[name]:value})
        setFormErrors({...formErrors,[name]:signupValidation(name,value)})
        if(name==="password" && data.confirmPassword!==""){
            let err="";
            if(data.confirmPassword!==value) err="Password Does not match";
            else setFormErrors({...formErrors,confirmPassword:""});
            setFormErrors({...formErrors,[name]:signupValidation(name,value),confirmPassword:err});
        }
        if(name==="confirmPassword"){
            if(data.password!==value)setFormErrors({...formErrors,[name]:"Password Does not match"})
            else setFormErrors({...formErrors,confirmPassword:""});
            }
    }
    const handleSubmit=(e:any)=>{
        
        let valid = true, newFormError:{[key:string]:string}={};
        for(let key in data){
            if(key==="accountType")continue;
            if(key!=="confirmPassword")newFormError[key]=signupValidation(key,data[key]);
            else if(data[key]!==data["password"])newFormError[key]="Password Does not match"
            if(newFormError[key]) valid=false;
        }
        setFormErrors(newFormError);
        
        if(valid===true){
            setLoading(true);
            registerUser(data).then((res)=>{
                console.log(res);
                setData(form);
                successNotification("Registered successfully","Redirecting to login page...");
                  setTimeout(()=>{
                    setLoading(false);
                    navigate("/login")
                  },4000)
            }).catch((err)=>{
                setLoading(false);
                console.log(err);
                errorNotification("Registration Failed",err.response.data.errorMessage)
            });
        }
        
    
    }
    return <><LoadingOverlay
    visible={loading}
    zIndex={1000}
    className="translate-x-1/2"
    overlayProps={{ radius: 'sm', blur: 2 }}
    loaderProps={{ color: 'brightSun.4', type: 'bars' }}
  />
    <div className="w-1/2 sm-mx:py-20 sm-mx:w-full px-20 bs-mx:px-10 md-mx:px-5 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create Account</div>
        <TextInput value={data.name} error={formErrors.name} name="name" onChange={handleChange} withAsterisk label="Full Name" placeholder="Your Name"/>
        <TextInput withAsterisk value={data.email} error={formErrors.email} onChange={handleChange} name="email"
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Your email"/>
         <PasswordInput value={data.password} error={formErrors.password} onChange={handleChange}  name="password"
         leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Password"
      withAsterisk
      placeholder="Enter Password"/>
         <PasswordInput value={data.confirmPassword} error={formErrors.confirmPassword} onChange={handleChange} name="confirmPassword"
         leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Confirm Password"
      withAsterisk
      placeholder="Enter Confirm Password"/>
       <Radio.Group 
      value={data.accountType}
      onChange={handleRadioChange}
      label="You are A ?"
      withAsterisk
    >
        <div className="flex gap-6 xs-mx:gap-3">
      <Radio className="px-6 py-4 sm-mx:px-4 sm-mx:py-2 border hover:bg-mine-shaft-900 border-mine-shaft-800 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 rounded-lg  " autoContrast value="APPLICANT" label="Applicant" />
      <Radio className="px-6 py-4 sm-mx:px-4 sm-mx:py-2 border hover:bg-mine-shaft-900 border-mine-shaft-800 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 rounded-lg  " autoContrast value="EMPLOYER" label="Employer" />
      </div>
    </Radio.Group>
      <Checkbox autoContrast label={<>I accept {' '}<Anchor>terms & conditions</Anchor></>}/>
      <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Sign up</Button>
      <div className="text-center sm-mx:text-sm xs-mx:text-xs">Already have an Account? <span className="text-center sm-mx:text-sm xs-mx:text-xs text-bright-sun-400 hover:underline cursor-pointer" onClick={()=>{navigate("/login");setFormErrors(form); setData(form)}}>Login</span> </div>
    </div>
    </>
}
export default Signup;