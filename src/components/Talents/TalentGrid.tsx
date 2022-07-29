import React, { useEffect, useState } from "react";
import localStyles from "./Talents.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import TalentCard from "./TalentCard";
type Props = {};
const talentHeadList = [
  "Websites",
  "UX & UI",
  "Backends",
  "Mobile",
  "Machine Learning",
  "Devops",
];
export default function TalentGrid({}: Props) {
  return (
    <div className={localStyles.talentGrid}>
      {" "}
      {talentHeadList.map((val, i) => (
        <TalentCard
          headerText={val}
          bodyText={"Bingus Bongus"}
          key={`talentGridCardNum${i}`}
        />
      ))}{" "}
    </div>
  );
}
