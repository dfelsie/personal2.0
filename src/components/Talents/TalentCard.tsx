import React, { useEffect, useState } from "react";
import localStyles from "./Talents.module.css";
import sharedStyles from "../../sharedStyles.module.css";
type Props = {
  headerText: String;
  bodyText: String;
};
export default function TalentCard({ headerText, bodyText }: Props) {
  return (
    <div className={localStyles.talentCard}>
      <div>Some Icon idk</div>
      <h3>{headerText} </h3>
      <p>{bodyText}</p>
    </div>
  );
}
