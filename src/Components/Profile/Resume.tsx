import { ActionIcon, FileInput, Textarea } from "@mantine/core";
import { IconCheck, IconEye, IconFile, IconPencil, IconView360, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useMediaQuery } from "@mantine/hooks";
import { getBase64, openBase64pdf } from "../../Services/Utilities";

const Resume = () => {
  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width:475px)");
  const [edit, setEdit] = useState(false);
  const profile = useSelector((state: any) => state.profile);
  const [about, setAbout] = useState("");
  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      setAbout(profile.about);
    } else {
      setEdit(false);
    }
  };
  const handleFileChange =async (file:any) =>{
    setEdit(false);
    let resume:any=await getBase64(file);
    let updatedProfile={...profile, resume: resume.split(',')[1]};
    dispatch(changeProfile(updatedProfile));
    successNotification("success","Profile picture updated Successfully ")

}
  return (
    <div className="px-3">
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        Resume{" "}
        <div>
          
          <ActionIcon
            onClick={handleClick}
            size={matches ? "md" : "lg"}
            variant="subtle"
            color={edit ? "red.8" : "brightSun.4"}
          >
            {" "}
            {edit ? (
              <IconX className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
      </div>
      {edit ? (
        <FileInput
        onChange={handleFileChange}
        accept="application/pdf"
        size="lg"
        leftSection={<IconFile/>}
        placeholder="Upload your resume (PDF)"
        className="w-full max-w-xs rounded-full border-mine-shaft-300 text-sm shadow-sm transition flex justify-center"
      />
      
      ) : (
        <span className="text-md text-mine-shaft-200 text-justify cursor-pointer hover:text-bright-sun-400 pl-5 flex" onClick={()=>openBase64pdf(profile.resume)}>
          <IconEye/> View
          </span>
      )}
    </div>
  );
};

export default Resume;
