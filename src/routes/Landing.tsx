import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import Footer from '../components/Layout/LandingDashboard/Footer'
import Header from '../components/Layout/LandingDashboard/Header'
import KButton from '../components/KButton'

export default function Landing() {
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
      <Box bg="var(--dark-mode-bg)" as="main" className="flex-1 w-full">
        <Box
          mt="-35px"
          // 100vh - height header - height footer + margin top
          height="calc(100vh - 80px - 72px + 35px)"
          zIndex={-1}
          w="100%"
          bg='url("/static-v2/bg.png") no-repeat center center'
          backgroundSize="cover"
          maxWidth="90rem"
          backgroundPosition="top"
          mx="auto"
        >
          <Stack h="100%" direction="row" justify="center" mr="0px">
            <Image
              pt="33px"
              d={{ base: 'none', xl: 'block' }}
              alignSelf="center"
              src={'/static-v2/mascot-1.png'}
              className="w-[240px]"
            />
            <Flex
              px={{ base: 3, xl: 1 }}
              pr={{ base: 3, xl: 2 }}
              direction="column"
              align="center"
              justify="center"
            >
              <Text
                color="var(--neutral-dark-6)"
                textAlign="center"
                fontSize={{ base: '46px', md: '56px' }}
                fontWeight="bold"
              >
                Fundraising Platform On NEAR
              </Text>
              <Text mt="12px" textAlign="center" color="var(--neutral-dark-5)" maxW="531px">
                KulaPad is the go-to platform for the Near blockchain. Invest in the hottest Neal
                projects. stake our tokens. trade on our DEX. manage vour Near wallet anc
                participate in our (future) governance
              </Text>
              <Flex mt="32px" direction={{ base: 'column', md: 'row' }} w="356px">
                <KButton
                  bg="var(--candy-3)"
                  color="var(--white)"
                  colorScheme="pink"
                  fontWeight="700"
                  fontSize={{ base: '16px' }}
                  height="40px"
                  size="sm"
                  isFullWidth={true}
                >
                  Explore projects
                </KButton>
                <Box display={{ base: 'none', md: 'block' }} w="24px" />
                <Box display={{ base: 'block', md: 'none' }} h="24px" />
                <KButton
                  fontWeight="700"
                  fontSize={{ base: '16px' }}
                  height="40px"
                  size="sm"
                  isFullWidth={true}
                >
                  Stake token
                </KButton>
              </Flex>
            </Flex>
            <Image
              pb="40px"
              d={{ base: 'none', xl: 'block' }}
              alignSelf="center"
              src={'/static-v2/mascot-2.png'}
              className="w-[160px]"
            />
          </Stack>
        </Box>
      </Box>
      <Footer />
    </Flex>
  )
}
