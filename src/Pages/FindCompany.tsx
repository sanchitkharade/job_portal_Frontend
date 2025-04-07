import React from "react";
import SearchBar from "../Components/FindCompany/SearchBar";
import { Divider } from "@mantine/core";
import Talents from "../Components/FindCompany/Companies";

const FindCompany = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <SearchBar />
      <Divider size="xs" mx="md" />
      <Talents />
    </div>
  );
};

export default FindCompany;
