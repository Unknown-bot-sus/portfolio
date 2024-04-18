import { ICertification, IEducation } from "../types";

export const educations: IEducation[] = [
  {
    id: 1,
    institution: "Goldsmiths, University of London",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    startDate: new Date("09-01-2022"),
    endDate: new Date("08-01-2022"),
  },
  {
    id: 2,
    institution: "SIMGE (SIM Global Education)",
    degree: "Diploma",
    fieldOfStudy: "Information Technology",
    startDate: new Date("03-01-2021"),
    endDate: new Date("02-01-2022"),
    grade: "3.938/4",
  },
];

export const certifications: ICertification[] = [];
