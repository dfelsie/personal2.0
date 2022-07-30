import React, { useEffect, useState } from "react";
import localStyles from "./Footer.module.css";
import sharedStyles from "../sharedStyles.module.css";
import joinClasses from "../../utils/joinClasses";
type Props = {};
export default function FooterSec({}: Props) {
  return (
    <div className={joinClasses(localStyles.footerSec)}>
      <ul className={localStyles.linkList}>
        <li>
          <a>Linkedin</a>
        </li>
        <li>
          <a>Github</a>
        </li>
        <li>
          <a>dfelsenthal88@gmail.com</a>
        </li>
      </ul>
      <div className={localStyles.madeBy}>Made by Daniel Felsenthal</div>
    </div>
  );
}
