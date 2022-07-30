import React, { useEffect, useState } from "react";
import localStyles from "./Talents.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import TalentCard from "./TalentCard";
import { MdOutlineWeb, MdPhoneAndroid, MdAutoGraph } from "react-icons/md";
import { BsServer } from "react-icons/bs";
import { FaDocker, FaHandSparkles } from "react-icons/fa";
import TalentCardData from "../../typeutils/cardData";
type Props = {};
const talentHeadList: TalentCardData[] = [
  { headText: "Websites", bodyText: "Dingus Dongus", icon: <MdOutlineWeb /> },

  { headText: "UX & UI", bodyText: "Dingus Dongus", icon: <FaHandSparkles /> },
  {
    headText: "Backend",

    bodyText: "Dingus Dongus",
    icon: <BsServer />,
  },
  { headText: "Mobile", bodyText: "Dingus Dongus", icon: <MdPhoneAndroid /> },
  {
    headText: "Machine Learning",
    bodyText: "Dingus Dongus",
    icon: <MdAutoGraph />,
  },
  { headText: "Devops", bodyText: "Dingus Dongus", icon: <FaDocker /> },
];
export default function TalentGrid({}: Props) {
  return (
    <div className={localStyles.talentGrid}>
      {" "}
      {talentHeadList.map((val, i) => (
        <TalentCard
          headerText={val.headText}
          bodyText={val.bodyText}
          icon={val.icon}
          key={`talentGridCardNum${i}`}
        />
      ))}{" "}
    </div>
  );
}
