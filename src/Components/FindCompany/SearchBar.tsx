import { Button, Collapse, Divider, Input, RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";

import { IconMapPin, IconSearch, IconUserCircle } from "@tabler/icons-react";

import React from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const SearchBar = ()=>{
    const searchFields=[
        { title: "Industry", icon: IconSearch, options: ["IT & Software Development", "Finance & Banking", "Healthcare & Pharmaceuticals", "Manufacturing & Engineering", "Sales & Marketing", "Education & EdTech", "Logistics & Supply Chain", "Telecom & Networking","Media & Entertainment"] },
        { title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
        
    ]
    const [opened, { toggle }] = useDisclosure(false);
     const matches = useMediaQuery('(max-width: 475px)');
    const dispatch= useDispatch();
    const [name, setName]=useState("");
    const handleChange=(name:any,e:any)=>{
            setName(e.target.value);
            dispatch(updateFilter({[name]:e.target.value}));
        
    }
    return(<div>
        <div className="flex justify-end">
                    {matches&&<Button variant="outline" color="brightSun.4" autoContrast m="sm" radius="lg" onClick={toggle}>{opened?"Close":"Filters"}</Button>}
                    </div>
                <Collapse in={(opened || !matches)}>
     <div className="flex px-5 lg-mx:!flex-wrap py-8 items-center !text-mine-shaft-100">
        <div className="flex xs-mx:w-full xs-mx:mb-1 items-center lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%] w-1/3">
            <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1   mr-3 "><IconUserCircle size={20}/></div>
            <Input defaultValue={name} onChange={(e)=>handleChange("name",e)} className="[&_input]:!placeholder-mine-shaft-300" variant="unstyled" placeholder="Company Name"/>
        </div>
        <Divider className="sm-mx:hidden" mr="xs" size="xs" orientation="vertical"/>
        {
            searchFields.map((item,index)=>{
            return<React.Fragment key={index}><div className="w-1/3  xs-mx:w-full lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:mb-1">
                <MultiInput {...item}/>
            </div>
            <Divider className="sm-mx:hidden" mr="xs" size="xs" orientation="vertical"/>
            </React.Fragment>})
        }
        
        
    </div>
    </Collapse>
    </div>
    )
}
export default SearchBar;