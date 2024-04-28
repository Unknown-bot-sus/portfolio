"use client";

import { IEducation } from "@/lib/types";
import { GiAchievement } from "react-icons/gi";
import { FC } from "react";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const EducationCard: FC<IEducation> = ({
  startDate,
  endDate,
  institution,
  degree,
  fieldOfStudy,
}) => {
  return (
    <div className="  hover:scale-105 transition-transform ease-in-out flex bg-background-100 rounded-xl overflow-hidden mt-5">
      <Image src={institution.logo} alt={`${institution.name} logo`} />
      <div className="flex flex-col justify-around p-5">
        <span className="text-sm">{`${formatDate(startDate)}-${formatDate(
          endDate
        )}`}</span>
        <span className="text-xl font-bold">
          {degree} in <br /> {fieldOfStudy}
        </span>
        <Link
          target="_blank"
          className="text-text-950 hover:underline italic"
          href={institution.link}
        >
          {institution.name}
        </Link>
      </div>
    </div>
  );
};
