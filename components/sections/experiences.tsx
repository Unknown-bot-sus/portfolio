"use client";

import { IExperience } from "@/lib/constants/exps";
import { FC } from "react";
import { ExperienceCard } from "../cards/experience-card";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface Props {
  experiences: IExperience[];
}

export const Experiences: FC<Props> = ({ experiences }) => {
  return (
    <section>
      <h2 className="hero-head-text mb-10">Work Experience</h2>
      <VerticalTimeline lineColor="" animate={true}>
        {experiences.map((experience) => (
          <ExperienceCard {...experience} key={experience.id} />
        ))}
      </VerticalTimeline>
    </section>
  );
};
