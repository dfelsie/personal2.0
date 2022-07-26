import React, { useEffect, useState } from "react";
import localStyles from "./Skills.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import SecHeader from "../widgets/SecHeader";
import joinClasses from "../../utils/joinClasses";
type Props = {};
const skills = {
  frontend: ["HTML5", "CSS3", "Javascript/Typescript", "React", "Next.js"],
  backend: ["HTML5", "CSS3", "Javascript/Typescript", "React", "Next.js"],
  mobile: ["HTML5", "CSS3", "Javascript/Typescript", "React", "Next.js"],
  "machine learning": [
    "HTML5",
    "CSS3",
    "Javascript/Typescript",
    "React",
    "Next.js",
  ],
  devops: ["HTML5", "CSS3", "Javascript/Typescript", "React", "Next.js"],
  other: ["HTML5", "CSS3", "Javascript/Typescript", "React", "Next.js"],
};
const skillGroups = Object.keys(skills);
export default function SkillsSec({}: Props) {
  return (
    <div className={joinClasses(sharedStyles.basicSec)}>
      <SecHeader
        bodyText={
          "I have experience with both fullstack development and machine learning."
        }
        headerText={"Tools I use"}
      />
      <div className={localStyles.skillGroupBigDiv}>
        {skillGroups.map((val, i) => (
          <div
            className={localStyles.skillGroupDiv}
            key={`Skillgroupdivnum${i}`}
          >
            <div className={localStyles.skillGroup} key={`Skillgroupnum${i}`}>
              {val}
            </div>
            <div key={`Skillsentencenum${i}`}>
              {skills[val].join(",")}
              {/* {skills[val].map((val, i) => (
                <></>
              ))} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
