import { useEffect, useState } from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { getAllProfile } from "../../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../Slices/FilterSlice";

const Talents=()=>{
    const dispatch=useDispatch();
    const[talents,setTalents]=useState<any>([]);
    const filter = useSelector((state:any)=>state.filter);
    const sort = useSelector((state:any)=>state.sort);
    const user = useSelector((state:any)=>state.user);

    const [filteredTalents,setFilteredTalents]=useState<any>([]);
    useEffect(()=>{
        dispatch(resetFilter()) ;
        getAllProfile().then((res)=>{
            setTalents(res.filter((prof:any)=>prof.name!==user.name));
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    useEffect(()=>{
    
         if(sort=="Experience: Low to High"){
            setTalents([...talents].sort((a:any,b:any)=>a.totalExp-b.totalExp));
        }
        else if(sort=="Experience: High to Low"){
            setTalents([...talents].sort((a:any,b:any)=>b.totalExp-a.totalExp));
        }
    },[sort]);
    useEffect(()=>{
        let filterTalent = talents;
        if(filter.name) {
            filterTalent = filterTalent.filter((talent: any) => 
                talent.name?.toLowerCase().includes(filter.name.toLowerCase())
            );
        }
        
        if(filter["Job Title"] && filter["Job Title"].length > 0) {
            filterTalent = filterTalent.filter((talent: any) => 
                talent.jobTitle && filter["Job Title"].some((title: any) => 
                    talent.jobTitle.toLowerCase().includes(title?.toLowerCase())
                )
            );
        }
        
        if(filter.Location && filter.Location.length > 0) {
            filterTalent = filterTalent.filter((talent: any) => 
                talent.location && filter.Location.some((location: any) => 
                    talent.location.toLowerCase().includes(location?.toLowerCase())
                )
            );
        }
        if(filter.Skills && filter.Skills.length>0){
            filterTalent=filterTalent.filter((talent:any)=>filter.Skills?.some((skill:any)=>talent.skills?.some((talentSkill:any)=>talentSkill.toLowerCase().includes(skill.toLowerCase()))));
        }
        if(filter.exp && filter.exp.length>0){
            filterTalent=filterTalent.filter((talent:any)=>filter.exp[0]<=talent.totalExp && talent.totalExp<=filter.exp[1]);
        }
        setFilteredTalents(filterTalent);
    },[filter,talents]);
    return <div className="p-5 pl-12">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Talents</div>
            <Sort/>
        </div>
        <div className="mt-10 flex flex-wrap gap-5 ">
            {
                filteredTalents.length?filteredTalents.map((talent:any,index:any)=><TalentCard key={index} {...talent}/>): <div className="text-2xl font-semibold">No Talents Found</div>
            }
        </div>
    </div>
}
export default Talents;