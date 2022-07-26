import React, { useEffect, useState } from "react";
import localStyles from "./AboutMe.module.css";
import sharedStyles from "../sharedStyles.module.css";
type Props = {};
export default function IdentityBar({}: Props) {
  return (
    <div className={localStyles.identityBarDiv}>
      <div>Img</div>{" "}
      <div>
        <h4>Daniel Felsenthal - NY, NY</h4>
      </div>{" "}
    </div>
  );
}
