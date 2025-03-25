import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form';
import { IconPaperclip } from '@tabler/icons-react'
import  { useState } from 'react'
import { getBase64 } from '../../Services/Utilities';
import { applyJob } from '../../Services/JobService';
import { useNavigate, useParams } from 'react-router-dom';
import { errorNotification, successNotification } from '../../Services/NotificationService';
import { useSelector } from 'react-redux';

const ApplyJobForm = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const user=useSelector((state:any)=>state.user);
    const [Preview,setPreview] = useState(false);
        const [submit,setSubmit] = useState(false);
        const handlePreview=()=>{
            form.validate();
            window.scrollTo({top:0 , behavior:'smooth'});
            if(!form.isValid())return;
            setPreview(!Preview);
        }
        const handlesubmit=async()=>{
            setSubmit(true);
            let resume:any=await getBase64(form.getValues().resume);
            let applicant={...form.getValues(),applicantId:user.id,resume:resume.split(',')[1]};
            applyJob(id,applicant).then((res)=>{
                setSubmit(false);
                successNotification("Success","Job Applied Successfully")
                navigate("/job-history");
            }).catch((err)=>{
                setSubmit(false);
                errorNotification("Error",err.response.data.errorMessage);
            });
        }
        const form=useForm({
                    mode:'controlled',
                    validateInputOnChange: true,
                    initialValues:{
                        name:'',
                        email:'',
                        phone:'',
                        website:'',
                        resume:null,
                        coverLetter:''
                    },
                    validate:{
                        name:isNotEmpty("Title is Required"),
                        email: isNotEmpty("Email is Required"),
                        phone: isNotEmpty("Phone Number is Required"),
                        website: isNotEmpty("Website is Required"),
                        resume: isNotEmpty("Resume is Required")
                    }
                })
  return <>
    <LoadingOverlay className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'brightSun.4', type: 'bars' }}/>
        
    <div className='flex flex-col gap-5'>
  <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap">
  <TextInput {...form.getInputProps("name")} readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk label="Full Name" placeholder="Enter Name"/>
  <TextInput {...form.getInputProps("email")} readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk label="Email" placeholder="Enter Email"/>
  </div>
  <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2">
  <NumberInput {...form.getInputProps("phone")} readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk label="Phone Number" placeholder="Enter Phone Number" hideControls min={0} max={9999999999} clampBehavior="strict"/>
  <TextInput {...form.getInputProps("website")} readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk label="Personal Website" placeholder="Enter URL"/>
  </div>
  <FileInput {...form.getInputProps("resume")} readOnly={Preview} variant={Preview?"unstyled":"default"} accept='application/pdf' className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk leftSection={<IconPaperclip stroke={1.5}/>} label="Attach Your CV" placeholder="Attach CV" leftSectionPointerEvents="none"/>
  <Textarea {...form.getInputProps("coverLetter")} readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk placeholder="Type something here" label="Cover Letter" autosize minRows={4}/>
  {!Preview && <Button onClick={handlePreview} color="brightSun.4" variant="light">Preview</Button>}
  {Preview && <div className="flex gap-10 [&>*]:w-1/2">
      <Button fullWidth onClick={handlePreview} color="brightSun.4" variant="outline">Edit</Button>
      <Button fullWidth onClick={handlesubmit} color="brightSun.4" variant="light">Submit</Button>
      </div>}
    </div>
</>
}

export default ApplyJobForm
