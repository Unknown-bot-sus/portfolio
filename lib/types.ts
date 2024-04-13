export interface IEducation {
  id: number;
  institution: string;
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
  expireDate: Date;
  credentialId: string;
  credentialUrl: string;
}
