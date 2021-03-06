import { Box, Flex } from '@chakra-ui/react'
import KText from './KText'
import Logo from './Logo'

export default function Footer() {
  return (
    <Box bg="#f8f8f8" w="100%">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={0}
        p={8}
        bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
        maxW={{ xl: '1200px' }}
        margin="0 auto"
      >
        <Logo />
        <KText type="text">© 2022 KulaPad. All Rights Reserved.</KText>
      </Flex>
    </Box>
  )
}
