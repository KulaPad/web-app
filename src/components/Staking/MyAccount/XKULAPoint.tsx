import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React from 'react'
import KButton from '../../KButton'

const neutralLight0 = 'var(--neutral-light-0)'
const neutralDark2 = 'var(--neutral-dark-2)'
const teal = 'var(--teal)'

type Props = {
}
export default observer(function XKULAPoint(props: Props) {
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
          xKULA Point
        </Heading>
      </Stack>

      <Image
        pt={4}
        alignSelf="center"
        src={'/static-v2/x-kula-point-2.png'} className="w-[72px]" />


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
        TIER 1
      </Text>

      <Box p={6}
        borderRadius="xl"
        bg="var(--dark-mode-bg)"
        border="1px solid var(--neutral-dark-4)"
      >
        <div className="flex justify-between">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Ticket
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            2 lottery tickets
          </Text>
        </div>
      </Box>

      <Image
        pt={4}
        alignSelf="center"
        src={'/static-v2/tiers/tier-1-2.png'}
      />
      <Box flex={1} />
      <KButton>
        Increase xKULA
      </KButton>
    </Stack>
  )
})
