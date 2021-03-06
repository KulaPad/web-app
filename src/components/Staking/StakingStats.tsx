import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Contract } from 'near-api-js/lib/contract'
import moment from 'moment'

import StakingStatsStore from './StakingStatsStore'
import { AccountJson, PoolInfo, TierNames } from '../../utils/KulaContract'
import { currency } from '../../utils/Number'
import { useStakingForm_Claim, useStakingStats } from './StakingHooks'



const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];


type Props = {
  contract: Contract    // dev account
  contractFT: Contract  // KULA token contract
  contractIdo: Contract     // IDO contract
  contractStaking: Contract // Staking contract
  currentUser: any
  nearConfig: any
  walletConnection: any
}
export default observer(function StakingStats(props: Props) {
  const {
    contractStaking,
    currentUser,
  } = props;

  const [] = useStakingStats(contractStaking, currentUser, StakingStatsStore)

  const {
    claim,
  } = useStakingForm_Claim(props, StakingStatsStore)

  const {
    lock_balance,
    unlock_timestamp,
    stake_balance,
    unstake_balance,
    reward,
    // tier,

    user_tier,
    user_ticket_allocation,
    user_ticket_staking,
  } = StakingStatsStore;

  const tierName = TierNames[user_tier]

  return (
    <Stack spacing={{ base: 10, md: 20 }}>
      <Heading
        lineHeight={1.1}
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
      >
        Your{" "}
        <Text
          as={"span"}
          bgGradient="linear(to-r, red.400,pink.400)"
          bgClip="text"
        >Stake Info</Text>
      </Heading>

      <Box>
        <Wrap>
          <WrapItem>
            <Avatar name='tier' src='https://static.wikia.nocookie.net/warpath/images/7/7e/VIP_Point_Icon.png' />
          </WrapItem>
          <Text
            fontSize={"3xl"}
            fontWeight={700}
            bgGradient="linear(to-r, purple.400,red.400)"
            bgClip="text"
          >{tierName}</Text>
        </Wrap>
        <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }} mt={4}>
          Your estimated tickets: <b>{user_ticket_allocation}</b> Allocation + <b>{user_ticket_staking}</b> Staking
        </Text>

        <HStack mt={10}>
          <Stat>
            <StatLabel>Locked</StatLabel>
            <StatNumber
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >{currency(lock_balance)} KULA</StatNumber>
            <StatHelpText>Until {moment((unlock_timestamp / 1e6) as any).format('MMM D')}</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Staked</StatLabel>
            <StatNumber
              bgGradient="linear(to-r, green.600,cyan.600)"
              bgClip="text"
            >{currency(stake_balance)} KULA</StatNumber>
            <StatHelpText><b style={{opacity: 0}}>.</b></StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Unstaked</StatLabel>
            <StatNumber
              bgGradient="linear(to-r, orange.400,red.400)"
              bgClip="text"
            >{currency(unstake_balance)} KULA</StatNumber>
            <StatHelpText><b style={{opacity: 0}}>.</b></StatHelpText>
          </Stat>
        </HStack>

        {/* APR */}
        <HStack mt={10} justifyContent={"flex-start"}>
          <Stat>
            <StatLabel>Staking APR</StatLabel>
            <StatNumber
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >10%</StatNumber>
            <StatHelpText><b style={{opacity: 0}}>.</b></StatHelpText>
          </Stat>
          <Stat>
            <StatNumber
              color="pink.400"
            >???</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Your Reward</StatLabel>
            <StatNumber
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >{currency(reward, 4)} KULA</StatNumber>
            <StatHelpText>
              <Button
                size="sm" colorScheme="pink" borderRadius="8px" py="4" px="4" lineHeight="1"
                onClick={claim}
                disabled={!(reward > 0)}
              >
                Claim reward
              </Button>
            </StatHelpText>
          </Stat>
        </HStack>

      </Box>
    </Stack>
  )
})
