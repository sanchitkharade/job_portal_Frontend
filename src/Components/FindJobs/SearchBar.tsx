import { Button, Collapse, Divider, RangeSlider } from "@mantine/core";
import MultiInput from "./MultiInput";
import { useState } from "react";
import { dropdownData } from "../../Data/JobsData";
import React from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const SearchBar = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const matches = useMediaQuery('(max-width: 475px)');
    const [value, setvalue]=useState<[number, number]>([0, 300]);
    const dispatch= useDispatch();
    const handleChange=(e:any)=>{
        dispatch(updateFilter({salary:e}));
        
    }
    return (
        <div>
            <div className="flex justify-end">
            {matches&&<Button variant="outline" color="brightSun.4" autoContrast m="sm" radius="lg" onClick={toggle}>{opened?"Close":"Filters"}</Button>}
            </div>
        <Collapse in={(opened || !matches)}>
      
        <div className="flex lg-mx:!flex-wrap px-5 py-5 items-center !text-mine-shaft-100">
            {dropdownData.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="w-1/5 lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1">
                        <MultiInput {...item} />
                    </div>
                    <Divider className="sm-mx:hidden" mr="xs" size="xs" orientation="vertical" />
                </React.Fragment>
            ))}
            <div className="w-1/5 lg-mx:w-1/4 lg-mx:mt-7 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex text-sm justify-between">
                    <div>Salary</div>
                    <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
                </div>
                <RangeSlider value={value} onChange={setvalue} size="xs" color="brightSun.4" onChangeEnd={handleChange} />
            </div>
        </div>
        </Collapse>
        </div>
    );
};

export default SearchBar;
