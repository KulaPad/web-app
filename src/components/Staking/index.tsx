import { Contract } from 'near-api-js/lib/contract'
import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import StakingForm from './StakingForm'
import StakingStats from './StakingStats'
import SystemStakingStats from './SystemStakingStats'

type Props = {
  contract: Contract    // dev account
  contractFT: Contract  // KULA token contract
  contractIdo: Contract     // IDO contract
  contractStaking: Contract // Staking contract
  currentUser: any
  nearConfig: any
  walletConnection: any
}
export default function StakingBox(props: Props) {
  return (
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
      <Container
        mt={20}
        maxW={"7xl"}
        // columns={{ base: 1, md: 2 } as any}
        // spacing={{ base: 10, lg: 32 }}
      >
        <SystemStakingStats {...props} />
      </Container>
    </Box>
  )
}
