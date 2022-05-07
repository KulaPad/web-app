import { Flex, Box, Text } from '@chakra-ui/react'
import Logo from '../../Logo'

export default function Footer() {
  return (
    <Box borderTop="1px solid #f0f0f1" bg="var(--neutral-light-6)" w="100%">
      <Flex as="nav" align="center" justify="space-between" className="py-[24px] container mx-auto">
        <Text color="var(--white)">KulaDecentrelize.Finance, All rights reserved</Text>
        <Logo />
      </Flex>
    </Box>
  )
}
