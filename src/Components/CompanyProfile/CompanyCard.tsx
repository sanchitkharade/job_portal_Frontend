import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard=(props:any)=>{
    return <div>
        <div className="flex  justify-between bg-mine-shaft-900 items-center rounded-lg p-2">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-6 w-6"
              src={`/Icons/${props.name}.png`}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold">{props.name}</div>
            <div className="text-xs 2text-mine-shaft-300">
              {props.employees} Employees
            </div>
          </div>
        </div>
        <ActionIcon color="brightSun.4" variant="subtal">
            <IconExternalLink/>
        </ActionIcon>
      </div>
    </div>
}
export default CompanyCard;