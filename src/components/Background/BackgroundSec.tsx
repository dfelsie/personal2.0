import localStyles from "./Background.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import React, { useEffect, useState } from "react";
import SecHeader from "../widgets/SecHeader";
import joinClasses from "../../utils/joinClasses";
type Props = {};
const bgHeads = ["Education", "Work Experience"];
export default function BackgroundSec({}: Props) {
  return (
    <div
      className={joinClasses(sharedStyles.basicSec, localStyles.backgroundSec)}
    >
      <SecHeader
        bodyText={"A summary of my past experience and education"}
        headerText={"My background"}
      />
      <div>Education</div>
      <div>Work Experience</div>
    </div>
  );
}
