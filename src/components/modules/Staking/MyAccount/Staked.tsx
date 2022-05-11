import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React from 'react'
import KButton from '../../../KButton'

const neutralLight0 = 'var(--neutral-light-0)'
const neutralDark2 = 'var(--neutral-dark-2)'
const teal = 'var(--teal)'

const stakedKula = '200';
type Props = {
}
export default observer(function Staked(props: Props) {
  return (
    <Stack
      p={{ base: 8 }}
      rounded={"xl"}
      bg={neutralDark2}
      h="100%"
    >
      <Stack
        direction='row' justify='center' align='center'>
        <Heading
          color={neutralLight0}
          fontSize={{ base: "xl" }}
        >
          Staked
        </Heading>
      </Stack>
      <Stack
        pt={4} direction='row' spacing={2} justify='center' align='center'>
        {[1, 2, 3].map((data) =>
          <Image
            key={`staked-${data}`}
            alignSelf="center"
            src={'/static-v2/x-kula-point.png'} className="w-[72px]" />
        )}
      </Stack>

      <Heading
        textAlign="center"
        color={neutralLight0}
        fontSize={{ base: "xl" }}
      >
        201.23 xKULA
      </Heading>
      <Text
        pb={4}
        textAlign="center"
        color={teal}
        as="span" className="text-sm font-bold">
        ~$1000
      </Text>
      <Box p={6}
        borderRadius="xl"
        bg="var(--dark-mode-bg)"
        border="1px solid var(--neutral-dark-4)"
      >
        <div className="flex justify-between">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Available Unstake
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            {stakedKula} KULA
          </Text>
        </div>
        <div className="flex justify-between pt-1">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Locked amount
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            {stakedKula} KULA
          </Text>
        </div>
        <div className="flex justify-between pt-1">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Unlock time
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            3/25/2023  (236 days lefts)
          </Text>
        </div>
        <Box as='hr'
          color="var(--neutral-dark-4)"
          borderColor="var(--neutral-dark-4)"
          bg="var(--neutral-dark-4)"
          className="mt-3"
        />
        <div className="flex justify-between pt-3">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Rewards
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            10.42 KULA
          </Text>
        </div>
        <div className="flex justify-between pt-1">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Estimate APY
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            10.00%
          </Text>
        </div>
        <div className="flex justify-between pt-1">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Estimated KULA/day
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            0.02 KULA
          </Text>
        </div>
      </Box>
      <Stack pt={4} spacing={2} direction="row">
        <KButton isFullWidth={true}>
          Stake
        </KButton>
        <KButton isFullWidth={true} disabled>
          Unstake
        </KButton>
      </Stack>

      <KButton isFullWidth={true}>
        Harvest
      </KButton>


    </Stack>
  )
})
