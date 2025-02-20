import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react"
import { changePass, sendOtp, verifyOtp } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword=(props:any)=> {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [passErr,setPassErr]=useState("");
    const [otpSent,setOtpSent]=useState(false);
    const [otpSending,setOtpSending]=useState(false);
    const [verified,setVerified]=useState(false);
    const [resendLoader,setResendLoader]=useState(false);
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => {
        if (seconds === 0) {
            setResendLoader(false);
            setSeconds(60);
            interval.stop();
        }else
        setSeconds((s) => s - 1)
    }, 1000);

    const handleSendOtp=()=>{
        setOtpSending(true);
        sendOtp(email).then((res)=>{
             console.log(res);
             successNotification("OTP sent successfully","Enter OTP to Reset Password")
            setOtpSent(true);
            setOtpSending(false);
            setResendLoader(true);
            interval.start();
        }).catch((err)=>{
                console.log(err);
                errorNotification("OTP sending failed",err.response.data.errorMessage);
                setOtpSending(false);
            });
    }
    const handleVerifyOtp=(otp:string)=>{
        verifyOtp(email,otp).then((res)=>{
            console.log(res);
            successNotification("OTP verified successfully","Enter new password")
            setVerified(true);
        }).catch((err)=>{
            console.log(err);
            errorNotification("OTP verification failed",err.response.data.errorMessage);
        });
    }
    const reSendOtp=()=>{
        if(resendLoader)return;
        handleSendOtp();
    }
    const changeEmail=()=>{
        setOtpSent(false);
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
    }
    const handleResestPass=()=>{
        changePass(email,password).then((res)=>{
            console.log(res);
            successNotification("Password reset successfully","Login with new password")
            props.close();
        }).catch((err)=>{
            console.log(err);
            errorNotification("Password reset failed",err.response.data.errorMessage);
        })
    }
  return  <Modal opened={props.opened} onClose={props.close} title="Reset Password">
  <div className="flex flex-col gap-6">
  <TextInput withAsterisk size="md" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" leftSection={<IconAt size={16} />} label="Email" placeholder="Your email" rightSection={<Button loading={otpSending && !otpSent} size="xs" className="mr-1" onClick={handleSendOtp} autoContrast disabled={email===""||otpSent} variant="filled">Login</Button>} rightSectionWidth="xl"  />
  {otpSent && <PinInput length={6} className="mx-auto" size="md" gap="lg" onComplete={handleVerifyOtp} type="number"/>}
  {otpSent && !verified &&
  <div className="flex gap-2">
    <Button fullWidth loading={otpSending} color="brightSun.4" onClick={reSendOtp} autoContrast variant="light">{resendLoader?seconds:"Resend"}</Button>
    <Button fullWidth onClick={changeEmail} autoContrast variant="filled">Change Email</Button>
    </div>}
    {verified && <PasswordInput value={password} error={passErr} onChange={(e)=>{setPassword(e.target.value); setPassErr(signupValidation("password",e.target.value))}}  name="password"
     leftSection={<IconLock size={16} stroke={1.5} />}
  label="Password"
  withAsterisk
  placeholder="Enter Password"/>}
  {verified && <Button fullWidth onClick={handleResestPass} autoContrast variant="filled">Reset Password</Button>}
  </div>
</Modal>
}

export default ResetPassword
