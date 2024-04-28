import { ICertification, IEducation } from "../types";
import { simLogo, uolLogo } from "./images";

export const educations: IEducation[] = [
  {
    id: 1,
    institution: {
      name: "Goldsmiths, University of London",
      logo: uolLogo,
      link: "https://www.gold.ac.uk/",
    },
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    startDate: new Date("09-01-2022"),
    endDate: new Date("08-01-2022"),
  },
  {
    id: 2,
    institution: {
      name: "SIMGE (SIM Global Education)",
      logo: simLogo,
      link: "https://www.sim.edu.sg/",
    },
    degree: "Diploma",
    fieldOfStudy: "Information Technology",
    startDate: new Date("03-01-2021"),
    endDate: new Date("02-01-2022"),
    grade: "3.938/4",
  },
];

export const certifications: ICertification[] = [
  {
    id: 1,
    name: "AI4I® – Foundations in AI",
    organization: "AI Singapore",
    issueDate: new Date("04-01-2023"),
    credentialId: "743739",
    credentialUrl:
      "https://learn.aisingapore.org/certificate-verification/815954DD93-156C2A8C1-12D555A8C/",
  },
  {
    id: 2,
    name: "AI FOR INDUSTRY® - Literacy In AI",
    organization: "AI Singapore",
    issueDate: new Date("11-01-2022"),
    credentialId: "64684367",
    credentialUrl:
      "https://certified.aisingapore.org/2bbdd412-8aa8-4b52-88a4-525eabead057",
  },
];
