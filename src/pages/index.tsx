import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import AboutMeHeadSec from "../components/AboutMe/AboutMeSec";
import BackgroundSec from "../components/Background/BackgroundSec";
import FooterSec from "../components/Footer/FooterSec";
import PreviousProjectsSec from "../components/Projects/PreviousProjectsSec";
import SkillsSec from "../components/Skills/SkillsSec";
import TalentsSec from "../components/Talents/TalentsSec";

const Index = () => (
  <Flex
    minH={"100vh"}
    flexDir={"column"}
    position={"relative"}
    w={"100%"}
    overflowX={"hidden"}
  >
    <AboutMeHeadSec />
    <TalentsSec />
    <PreviousProjectsSec />
    <SkillsSec />
    <BackgroundSec />
    <FooterSec />
  </Flex>
);

export default Index;
