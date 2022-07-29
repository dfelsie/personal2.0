import React, { useEffect, useState } from "react";
import localStyles from "./Footer.module.css";
import sharedStyles from "../sharedStyles.module.css";
import joinClasses from "../../utils/joinClasses";
type Props = {};
export default function FooterSec({}: Props) {
  return <div className={joinClasses(localStyles.footerSec)}> FooterSec </div>;
}
