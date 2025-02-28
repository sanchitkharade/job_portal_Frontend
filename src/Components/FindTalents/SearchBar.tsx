import { Divider, Input, RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";

import { IconUserCircle } from "@tabler/icons-react";
import { searchFields } from "../../Data/TalentData";
import React from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";

const SearchBar = ()=>{
    const [value, setvalue]=useState<[number, number]>([0, 50]);
    const dispatch= useDispatch();
    const [name, setName]=useState("");
    const handleChange=(name:any,e:any)=>{
        if(name==="exp")dispatch(updateFilter({exp:e}));
        else {
            setName(e.target.value);
            dispatch(updateFilter({[name]:e.target.value}));
        }
    }
    return <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
        <div className="flex items-center">
            <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1  mr-3"><IconUserCircle size={20}/></div>
            <Input defaultValue={name} onChange={(e)=>handleChange("name",e)} className="[&_input]:!placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name"/>
        </div>
        {
            searchFields.map((item,index)=>{
            return<React.Fragment key={index}><div className="w-1/5">
                <MultiInput {...item}/>
            </div>
            <Divider mr="xs" size="xs" orientation="vertical"/>
            </React.Fragment>})
        }
        <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex text-sm justify-between">
            <div>Experience (Year)</div>
            <div>{value[0]} - {value[1]}</div>
        </div>
        <RangeSlider onChangeEnd={(e)=>handleChange("exp",e)} value={value} min={1} max={50} size="xs" minRange={1} onChange={setvalue} /></div>
        
    </div>
}
export default SearchBar;