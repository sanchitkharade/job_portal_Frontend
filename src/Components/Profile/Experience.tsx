import { ActionIcon } from "@mantine/core";
import {
  IconDeviceFloppy,
  IconPencil,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import ExpInput from "./ExpInput";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

const Experience = () => {
  const [edit, setEdit] = useState(false);
  const [addExp, setaddExp] = useState(false);
  const matches = useMediaQuery("(max-width:475px)");
  const profile = useSelector((state: any) => state.profile);
  const handleClick = () => {
    setEdit(!edit);
  };
  return (
    <div className="px-3 ">
      <div className="text-2xl font-semibold mb-5 flex justify-between">
        Experience{" "}
        <div className="flex gap-2">
          {" "}
          <ActionIcon
            onClick={() => setaddExp(true)}
            size={matches ? "md" : "lg"}
            variant="subtle"
            color="brightSun.4"
          >
            <IconPlus className="h-4/5 w-4/5" />
          </ActionIcon>
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
      <div className="flex flex-col gap-8">
        {profile?.experiences?.map((exp: any, index: number) => (
          <ExpCard key={index} {...exp} index={index} edit={edit} />
        ))}
        {addExp && <ExpInput add setEdit={setaddExp} />}
      </div>
    </div>
  );
};

export default Experience;
