import { useState } from "react";

import { createCompany } from "../Services/CompanyService";
import {
  Button,
  FileInput,
  Input,
  Modal,
  TagsInput,
  TextInput,
} from "@mantine/core";
import {
  errorNotification,
  successNotification,
} from "../Services/NotificationService";
import { IconChevronDown } from "@tabler/icons-react";
import { getBase64 } from "../Services/Utilities";

const CreateCompany = () => {
  const form = {
    name: "",
    email: "",
    overview: "",
    industry: "",
    website: "",
    headquarter: "",
    size: 0,
    specialitis: [] as string[],
    picture: null as string | null, // For base64
    pictureFile: null as File | null, // For displaying filename
  };

  const [data, setData] = useState(form);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSpecialitiesChange = (value: string[]) => {
    setData((prev) => ({ ...prev, specialitis: value }));
  };

  const handleFileChange = async (file: File | null) => {
    if (file) {
      const base64 = (await getBase64(file)) as string;
      setData((prev) => ({
        ...prev,
        picture: base64.split(",")[1],
        pictureFile: file,
      }));
      successNotification("Success", "Profile picture updated successfully");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createCompany(data)
      .then((res) => {
        console.log(res);
        setData(form);
        successNotification(
          "Created successfully",
          "Company Created Successfyully"
        );
      })
      .catch((err) => {
        console.log(err);
        errorNotification(
          "Registration Failed",
          err.response.data.errorMessage
        );
      });
  };

  return (
    <div className=" bg-mine-shaft-950 font-['poppins'] p-4 ">
      <div className="text-2xl font-semibold flex justify-center text-bright-sun-400">
        Create Company
      </div>
      <div className="flex  justify-center p-8">
        <div className="p-8 bg-mine-shaft-900 w-2/3 rounded-2xl">
          <div className="flex  gap-5">
            <TextInput
              size="md"
              required
              className="w-1/2"
              value={data.name}
              name="name"
              onChange={handleChange}
              withAsterisk
              label="Company Name"
              placeholder="Company Name"
            />
            <TextInput
              size="md"
              required
              className="w-1/2"
              withAsterisk
              value={data.email}
              onChange={handleChange}
              name="email"
              label="Email"
              placeholder="Your email"
            />
          </div>
          <div className="flex  gap-5">
            <TextInput
              size="md"
              required
              className="w-1/2"
              value={data.overview}
              name="overview"
              onChange={handleChange}
              withAsterisk
              label="Overview"
              placeholder="Enter Text"
            />
            <TextInput
              size="md"
              required
              className="w-1/2"
              value={data.size}
              name="size"
              onChange={handleChange}
              withAsterisk
              label="Size"
              placeholder="Enter Employee Size"
            />
          </div>
          <div className="flex  gap-5">
            <TextInput
              size="md"
              required
              className="w-1/2"
              value={data.website}
              name="website"
              onChange={handleChange}
              withAsterisk
              label="Website"
              placeholder="Enter Text"
            />
            <TextInput
              size="md"
              required
              className="w-1/2"
              withAsterisk
              value={data.headquarter}
              onChange={handleChange}
              name="headquarter"
              label="Headquarter"
              placeholder="Enter Text"
            />
          </div>
          <div className="flex  gap-5">
            <Input.Wrapper label="Industry" withAsterisk className="w-1/2">
              <Input
                size="md"
                required
                component="select"
                rightSection={<IconChevronDown size={14} stroke={1.5} />}
                pointer
                mb="md"
                value={data.industry}
                name="industry"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select Industry
                </option>{" "}
                {/* <-- This */}
                <option value="IT & Software Development">
                  IT & Software Development
                </option>
                <option value="Finance & Banking">Finance & Banking</option>
                <option value="Healthcare & Pharmaceuticals">
                  Healthcare & Pharmaceuticals
                </option>
                <option value="Manufacturing & Engineering">
                  Manufacturing & Engineering
                </option>
                <option value="Sales & Marketing">Sales & Marketing</option>
                <option value="Education & EdTech">Education & EdTech</option>
                <option value="Logistics & Supply Chain">
                  Logistics & Supply Chain
                </option>
                <option value="Telecom & Networking">
                  Telecom & Networking
                </option>
                <option value="Media & Entertainment">
                  Media & Entertainment
                </option>
              </Input>
            </Input.Wrapper>

            <TagsInput
              size="md"
              required
              className="w-1/2"
              withAsterisk
              label="Specialities"
              placeholder="Enter Speciality"
              clearable
              name="specialitis"
              onChange={handleSpecialitiesChange}
              value={data.specialitis}
            />
          </div>
          <div className="flex  gap-5">
            <div className="w-1/3">
              <FileInput
                size="md"
                accept="image/png,image/jpeg"
                label="Upload Photo"
                placeholder="Upload files"
                onChange={handleFileChange}
                name="picture"
                value={data.pictureFile}
              />
            </div>
          </div>
          <div className="flex  gap-5 pt-6 justify-center">
            <Button size="lg" autoContrast onClick={handleSubmit}>
              {" "}
              + Create Company{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateCompany;
