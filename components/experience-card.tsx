"use client";

import { IExperience } from "@/lib/constants/exps";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useInView } from "react-intersection-observer";

export const ExperienceCard: FC<IExperience> = ({
  id,
  title,
  pic,
  company,
  startDate,
  endDate,
  description,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      visible={inView}
      className="vertical-timeline-element--work"
      date={`${formatDate(startDate)} - ${
        endDate ? formatDate(endDate) : "Present"
      }`}
      icon={
        <div className="w-full h-full flex justify-center items-center bg-white rounded-full">
          <Image src={pic ?? ""} alt={company} />
        </div>
      }
    >
      <div ref={ref}>
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-gray-500 text-sm font-semibold m-0">{company}</p>
      </div>
      <ul className="mt-5 ml-5 list-disc space-y-2">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
