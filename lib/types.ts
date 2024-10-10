import { type ClassValue } from "clsx";
import { StaticImageData } from "next/image";

export type IClassName = ClassValue

export interface IInstitution {
  name: string;
  link: string;
  logo: StaticImageData | string;
}

export interface IEducation {
  id: number;
  institution: IInstitution;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate: Date;
  grade?: string;
}

export interface ICertification {
  id: number;
  name: string;
  organization: string;
  issueDate: Date;
  expireDate?: Date;
  credentialId: string;
  credentialUrl: string;
}
