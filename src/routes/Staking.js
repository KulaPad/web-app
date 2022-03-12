import { Box, Container, SimpleGrid, Text, Image } from "@chakra-ui/react";

import HomeLayout from "../components/HomeLayout";
import KText from "../components/KText";
import StakingForm from "../components/Staking/StakingForm.tsx";
import StakingStats from "../components/Staking/StakingStats.tsx";

export default function Staking(props) {
  return (
    <HomeLayout>
      {/*<KText mt={20} mb={12} type="semi-head" textAlign="center">*/}
      {/*  Staking KULA Token*/}
      {/*</KText>*/}

      <Box position={"relative"} mt={20}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
        >
          <StakingForm {...props} />
          <StakingStats {...props} />
        </Container>
      </Box>

      <KText mt={20} type="semi-head" textAlign="center">
        Tier
      </KText>
      <Image
        margin="auto"
        mt={10}
        maxW="768px"
        mb={20}
        src={`/mstatic/tier.png`}
      />

      <KText mt={40} type="semi-head" textAlign="center">
        Staking Leader Board
      </KText>
      <Image margin="auto"  mb={20} src={`/mstatic/leader_board.png`} />
    </HomeLayout>
  );
}
