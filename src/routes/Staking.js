import { useState } from "react";
import {
  Badge,
  Box, Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";

import HomeLayout from "../components/HomeLayout";
import KText from "../components/KText";
import StakingForm from "../components/StakingForm";



export default function Staking(props) {
  const { currentUser } = props;
  // console.log('{default.Staking} currentUser: ', currentUser);

  const colors = [
    ['#fbfffb', '#fbfffb'],
    ['#fff6f6', '#fff6f6'],
  ]
  const [tabIndex, setTabIndex] = useState(0)


  return <HomeLayout>
    {/*<KText mt={20} mb={12} type="semi-head" textAlign="center">*/}
    {/*  Staking KULA Token*/}
    {/*</KText>*/}
    <StakingForm />


    <KText mt={40} mb={40} type="semi-head" textAlign="center">
      Staking Leader Board
      <Text mt={4} color={"gray.500"} fontSize={{ base: "sm", sm: "md" }} align={"center"}>
        Coming soon! TODO: Chụp ảnh màn hình ở đâu đập vào
      </Text>
    </KText>

  </HomeLayout>;
}
