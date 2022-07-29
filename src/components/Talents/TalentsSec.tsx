import localStyles from "./Talents.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import React, { useEffect, useState } from "react";
import SecHeader from "../widgets/SecHeader";
import joinClasses from "../../utils/joinClasses";
import TalentGrid from "./TalentGrid";
type Props = {};
export default function TalentsSec({}: Props) {
  return (
    <div className={joinClasses(sharedStyles.basicSec)}>
      <SecHeader
        bodyText={"I'm a man of countless talents"}
        headerText={"How I can help you"}
      />
      <TalentGrid />
    </div>
  );
}
