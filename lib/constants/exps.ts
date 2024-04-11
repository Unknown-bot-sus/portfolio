import { StaticImageData } from "next/image";
import { meta, starbucks, tesla } from "./images";

type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Outsource"
  | "Freelance";

type LocationType = "On-site" | "Remote" | "Hybrid";

export interface IExperience {
  id: number;
  title: string;
  employmentType: EmploymentType;
  company: string;
  location: string;
  locationType: LocationType;
  startDate: Date;
  endDate?: Date;
  currentlyWorking: boolean;
  description: string[];
  pic?: StaticImageData | string;
}

export const experiences: IExperience[] = [
  {
    id: 1,
    title: "Frontend Developer",
    employmentType: "Outsource",
    locationType: "On-site",
    company: "D3-SG Pte Ltd",
    location: "Sg",
    pic: starbucks,
    startDate: new Date("01-05-2022"),
    endDate: new Date("01-08-2022"),
    currentlyWorking: true,
    description: [
      "Implment a form generator with dynamic fields and validations based on insurance policy and user data for an insurance company using formik.",

      "Implmenet axios instance generator and helper functrions such as debounce",

      "Work in an agile development with a team of three",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    employmentType: "Outsource",
    locationType: "On-site",
    company: "D3-SG Pte Ltd",
    location: "Sg",
    startDate: new Date("01-05-2022"),
    endDate: new Date("01-08-2022"),
    currentlyWorking: true,
    pic: meta,
    description: [
      "Implment a form generator with dynamic fields and validations based on insurance policy and user data for an insurance company using formik.",

      "Implmenet axios instance generator and helper functrions such as debounce",

      "Work in an agile development with a team of three",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    employmentType: "Outsource",
    locationType: "On-site",
    company: "D3-SG Pte Ltd",
    location: "Sg",
    startDate: new Date("01-05-2022"),
    endDate: new Date("01-08-2022"),
    pic: tesla,
    currentlyWorking: true,
    description: [
      "Implment a form generator with dynamic fields and validations based on insurance policy and user data for an insurance company using formik.",

      "Implmenet axios instance generator and helper functrions such as debounce",

      "Work in an agile development with a team of three",
    ],
  },
];
