import { Flex } from '@chakra-ui/react'
import Footer from '../../Footer'
import Header from '../../Header'

export default function SimpleLayout(props) {
  return (
    <Flex direction="column" align="center" minH="100vh">
      <Header />
      <div className="w-full flex-1 max-w-7xl">{props.children}</div>
      <Footer />
    </Flex>
  )
}
