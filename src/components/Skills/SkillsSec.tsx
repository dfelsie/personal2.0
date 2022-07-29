import React, { useEffect, useState } from "react";
import localStyles from "./Skills.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import SecHeader from "../widgets/SecHeader";
import joinClasses from "../../utils/joinClasses";
type Props = {};
const skills = {
  frontend: ["HTML5", "CSS3", "Javascript/Typescript", "React", "Next.js"],
  frontend1: ["HTML5", "CSS3", "Javascript/Typescript", "React", "Next.js"],
  frontend2: ["HTML5", "CSS3", "Javascript/Typescript", "React", "Next.js"],
};
const skillGroups = Object.keys(skills);
export default function SkillsSec({}: Props) {
  return (
    <div className={joinClasses(sharedStyles.basicSec)}>
      <SecHeader
        bodyText={"I'm a man of countless talents"}
        headerText={"How I can help you"}
      />
      <div>
        {skillGroups.map((val, i) => (
          <div className={localStyles.skillGroupDiv}>
            <div className={localStyles.skillGroup} key={`Objectgroupnum${i}`}>
              {val}
            </div>
            <div>
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
