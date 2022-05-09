import { Box, SimpleGrid } from '@chakra-ui/react'
import { Contract } from 'near-api-js/lib/contract'
import IdoStakingForm from './IdoStakingForm'
import StakingStatsV2 from './StakingStatsV2'

type Props = {
  contract: Contract    // dev account
  contractFT: Contract  // KULA token contract
  contractIdo: Contract     // IDO contract
  contractStaking: Contract // Staking contract
  currentUser: any
  nearConfig: any
  walletConnection: any
}
export default function Stake(props: Props) {
  return (
    <Box position={"relative"} mt={4}>
      <SimpleGrid
        p={0}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 4, lg: 4 }}
      >
        <IdoStakingForm {...props} />
        <StakingStatsV2 />
      </SimpleGrid>
    </Box>
  )
}
