import { Box, Flex } from '@chakra-ui/react'
import Footer from './Footer'
import Header from './Header'

export default function LandingDashboard(props) {
  return (
    <Flex
      bg="var(--neutral-dark-1)"
      color="var(--neutral-light-2)"
      minH="100vh"
      w="100%"
      overflowX="hidden"
      direction="column"
      align="center"
    >
      <Header />
      <Box as="main" className="flex-1 w-full" bg="var(--dark-mode-bg)">
        <div className="container mx-auto">{props.children}</div>
      </Box>
      <Footer />
    </Flex>
  )
}
