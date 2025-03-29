import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { fields } from "../../Data/PostJob";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";

const CertiInput =(props:any)=>{
    const dispatch=useDispatch();
    const profile = useSelector((state:any) => state.profile);
    const select=fields;

     const form=useForm({
            mode:'controlled',
            validateInputOnChange: true,
            initialValues:{
                name:'',
                issuer:'',
                issueDate:new Date(),
                certificateId:''
            },
            validate:{
                name:isNotEmpty("Title is Required"),
                issuer:isNotEmpty("Issuer is Required"),
                issueDate: isNotEmpty("Issue Date is Required"),
                certificateId: isNotEmpty("Certificate ID is Required")
            }
        })
        const handleSave=()=>{
            form.validate();
            if(!form.isValid())return;
            let certi=[...profile.certifications];
            certi.push(form.getValues());
            certi[certi.length-1].issueDate=certi[certi.length-1].issueDate.toISOString();
            let updatedProfile={...profile,certifications:certi};
            props.setEdit(false);
            dispatch(changeProfile(updatedProfile));
            successNotification("Success","Profile updated successfully");
            
        }
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Add Certificate</div>
        <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 xs-mx:[&>*]:w-full xs-mx:flex-wrap">
        <TextInput {...form.getInputProps("name")} label="Title" withAsterisk placeholder="Input placeholder"/>
        <SelectInput form={form} name="issuer" {...select[1]}/>
        </div>
        <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 xs-mx:[&>*]:w-full xs-mx:flex-wrap">
        <MonthPickerInput {...form.getInputProps("issueDate")} withAsterisk maxDate={new Date()} label="Issue Date" placeholder="Pick Date" />
        <TextInput {...form.getInputProps("certificateId")} label="Certificate ID" withAsterisk placeholder="Input ID"/>
        </div>
        <div className="flex gap-5">
                        <Button onClick={handleSave} color="green.8" variant="light">Save</Button>
                        <Button onClick={()=>props.setEdit(false)}  color="red.8" variant="light">Cancel</Button>
      </div>
    </div>
}
export default CertiInput;