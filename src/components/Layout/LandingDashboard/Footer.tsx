import { Flex, Box, Text } from '@chakra-ui/react'
import SocialToolbar from '../../SocialToolbar'

export default function Footer() {
  return (
    <Box bg="var(--neutral-light-6)" w="100%">
      <Flex as="nav" align="center" justify="space-between" className="py-[24px] container mx-auto">
        <Text color="var(--white)">KulaDecentrelize.Finance, All rights reserved</Text>
        <SocialToolbar />
      </Flex>
    </Box>
  )
}
