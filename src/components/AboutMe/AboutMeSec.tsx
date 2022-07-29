import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";

type Props = {};
import localStyles from "./AboutMe.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import IdentityBar from "./IdentityBar";
import joinClasses from "../../utils/joinClasses";
export default function AboutMeHeadSec({}: Props) {
  return (
    <div className={joinClasses(localStyles.aboutMeSec, sharedStyles.triangle)}>
      <IdentityBar />{" "}
      <div className={localStyles.headText}>
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          ducimus dolorem ut itaque dolorum exercitationem voluptatem atque
          deserunt, quis ipsum officia?
        </h2>
      </div>
      <div className={localStyles.bodyText}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          ducimus dolorem ut itaque dolorum exercitationem voluptatem atque
          deserunt, quis ipsum officia? Ex, officia quasi. Praesentium,
          blanditiis nobis? Expedita, nisi cupiditate?
        </p>
      </div>
      <div className={localStyles.smallHeadText}>
        <a>Want to work with me? Here's my contact info:</a>
      </div>
    </div>
  );
}
