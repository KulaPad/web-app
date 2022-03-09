import {
  Text
} from "@chakra-ui/react";

import HomeLayout from "../components/HomeLayout";
import KText from "../components/KText";
import StakingForm from "../components/Staking/StakingForm";


export default function Staking(props) {
  return <HomeLayout>
    {/*<KText mt={20} mb={12} type="semi-head" textAlign="center">*/}
    {/*  Staking KULA Token*/}
    {/*</KText>*/}
    <StakingForm {...props} />


    <KText mt={40} type="semi-head" textAlign="center">
      Staking Leader Board
    </KText>
    <Text mt={4} mb={40} color={"gray.500"} fontSize={{ base: "sm", sm: "md" }} align={"center"}>
      Coming soon! TODO: Chụp ảnh màn hình ở đâu đập vào
    </Text>

  </HomeLayout>;
}
