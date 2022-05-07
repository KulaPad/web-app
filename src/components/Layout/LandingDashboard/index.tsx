import { Flex } from '@chakra-ui/react'
import Footer from './Footer'
import Header from './Header'

export default function LandingDashboard(props) {
  return (
    <Flex
      bg="var(--neutral-dark-1)"
      color="var(--neutral-light-2)"
      minH="100vh"
      minW="100vw"
      direction="column"
      align="center"
    >
      <Header />
      <main className="flex-1  w-full" style={{ background: 'var(--dark-mode-bg)' }}>
        <div className="container mx-auto">{props.children}</div>
      </main>
      <Footer />
    </Flex>
  )
}
