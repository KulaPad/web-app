import React from "react";
import {observer} from "mobx-react-lite";
import {Box, Flex, HStack, Image, SimpleGrid, Stat, StatLabel, StatNumber, Text} from "@chakra-ui/react";
import StakingStatsStore from "./StakingStatsStore.ts";
import {currency} from "../../utils/Number.ts";
import Typography from "../KText";
import {LaunchInfo} from "../Detail/LaunchpadDetail.js";

type Props = {}
export default observer(function SystemStakingStats(props: Props) {
  const {
    total_stake_balance,
    total_reward,
    total_stakers,
  } = StakingStatsStore;

  return (
    <Box
      mt={0}
      px={6}
      py={12}
      bg="linear-gradient(180deg,#fbf4fc,#feecff)"
      borderRadius="20px"
    >
      <SimpleGrid
        columns={{base: 1, md: 3}}
        spacing={{base: "4px", sm: "8px", md: "12px", lg: "24px"}}
      >
        <LaunchInfo
          title="Total System Staked"
          image={"/favicon-96x96.png"}
          semiTitle={<Text bgGradient="linear(to-r, pink.400,red.400)" bgClip="text" as={"span"}>
            {currency(total_stake_balance, 0)}
          </Text>}
          semiTitleContent={`KULA`}
        />
        <LaunchInfo
          title="Total System Reward"
          image={"/favicon-96x96.png"}
          semiTitle={<Text bgGradient="linear(to-r, green.600,cyan.600)" bgClip="text" as={"span"}>
            {currency(total_reward, 0)}
          </Text>}
          semiTitleContent={"KULA"}
        />
        <LaunchInfo
          title="Total Stakers"
          image={"/favicon-96x96.png"}
          semiTitle={<Text bgGradient="linear(to-r, orange.400,red.400)" bgClip="text" as={"span"}>
            {total_stakers}
          </Text>}
          semiTitleContent={"users"}
        />
      </SimpleGrid>
    </Box>
  )
})
