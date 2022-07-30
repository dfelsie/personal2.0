import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
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
      <div className={joinClasses(localStyles.card, localStyles.eduCard)}>
        <div className={joinClasses(localStyles.cardHead)}>
          <div className={localStyles.backgroundIcon}>
            <FaGraduationCap />{" "}
          </div>
          <h3> Education</h3>
        </div>
      </div>
      <div className={joinClasses(localStyles.card, localStyles.expCard)}>
        <div className={joinClasses(localStyles.cardHead)}>
          <div className={localStyles.backgroundIcon}>
            <MdWork />{" "}
          </div>

          <h3> Work Experience</h3>
        </div>
      </div>
    </div>
  );
}
