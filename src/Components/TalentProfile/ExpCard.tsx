import { formatdate } from "../../Services/Utilities";

const ExpCard =(prop:any)=>{
    return <div className="flex flex-col gap-2">
        <div className="flex  justify-between gap-2 flex-wrap">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-6 w-6"
              src={`/Icons/${prop.company}.png`}
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">{prop.title} </div>
            <div className="text-sm 2text-mine-shaft-300">
            {prop.company}  &#x2022;{prop.location} 
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">{formatdate(prop.startDate) } - {formatdate(prop.endDate) }</div>
      </div>
      <div className="text-sm xs-mx:text-xs text-mine-shaft-300 text-justify">{prop.description}</div>
    </div>
}
export default ExpCard;