import { ICertification, IEducation } from "@/lib/types";
import { FC } from "react";
import { PiCertificateLight } from "react-icons/pi";
import { EducationCard } from "../cards/education-card";
import { CertCard } from "../cards/cert-card";

interface Props {
  certifications: ICertification[];
  educations: IEducation[];
}

export const Education: FC<Props> = ({ certifications, educations }) => {
  return (
    <section>
      <h2 className="flex items-center hero-head-text">
        Qualifications <PiCertificateLight />
      </h2>
      <div>
        <h3>Educations</h3>
        <div className="flex flex-wrap justify-around">
          {educations.map((education) => (
            <EducationCard {...education} key={education.id} />
          ))}
        </div>
      </div>
      <div>
        <h3>Certificates</h3>
        <div>
          {certifications.map((certs) => (
            <CertCard {...certs} key={certs.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
