import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../Slices/FilterSlice";
import {  getAllCompany } from "../../Services/CompanyService";
import { Button} from "@mantine/core";
import CompanyCard from "./CompanyCard";

import { useNavigate } from "react-router-dom";

const Companies = () => {
  const navigate=useNavigate();
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [companies, setCompanies] = useState<any>([]);
  const filter = useSelector((state: any) => state.filter);

  const [filteredCompany, setFilteredCompany] = useState<any>([]);
  useEffect(() => {
    dispatch(resetFilter());
    getAllCompany()
      .then((res) => {
        setCompanies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let filterCompany = companies;

    if (filter.name) {
      filterCompany = filterCompany.filter((company: any) =>
        company.name?.toLowerCase().includes(filter.name.toLowerCase())
      );
    }

    if (filter["Industry"] && filter["Industry"].length > 0) {
      filterCompany = filterCompany.filter(
        (talent: any) =>
          talent.industry &&
          filter["Industry"].some((title: any) =>
            talent.industry.toLowerCase().includes(title?.toLowerCase())
          )
      );
    }

    if (filter.Location && filter.Location.length > 0) {
      filterCompany = filterCompany.filter(
        (talent: any) =>
          talent.headquarter &&
          filter.Location.some((location: any) =>
            talent.headquarter.toLowerCase().includes(location?.toLowerCase())
          )
      );
    }

    setFilteredCompany(filterCompany);
  }, [filter, companies]);

  return (
    <div className="p-5 pl-12">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Companies</div>
        {user.accountType == "EMPLOYER" && (
          <Button autoContrast onClick={()=>navigate("/create-company")}> + Create Company </Button>
        )}
      </div>
      <div className="mt-10 flex flex-wrap gap-5 ">
        {filteredCompany.length ? (
          filteredCompany.map((company: any, index: any) => (
            <CompanyCard key={index} {...company} />
          ))
        ) : (
          <div className="text-2xl font-semibold">No Companies Found</div>
        )}
      </div>
    </div>
  );
};
export default Companies;
