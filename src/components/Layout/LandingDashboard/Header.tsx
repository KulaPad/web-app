import { Box, Flex, Icon, Image, styled, Text } from '@chakra-ui/react'
import { BiWallet } from 'react-icons/bi'
import { FiZap } from 'react-icons/fi'
import { RiCopperCoinLine } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import { A } from '../../A'
import SignInBtn from '../../Auth/SignInBtn'
import KText from '../../KText'

const ACTIVE = 'var(--candy-3)'

const NAVIGATION = [
  {
    title: 'Projects',
    url: '/projects',
    icon: RiCopperCoinLine,
  },
  {
    title: 'Staking',
    url: '/staking',
    icon: BiWallet,
  },
  {
    title: 'Pool',
    url: '/pool',
    icon: BiWallet,
  },
]
const Header = (props) => {
  const location = useLocation()

  const isPathActive = (path: string) => {
    return path === location.pathname
  }

  console.log('window.location.pathname::', location.pathname)

  return (
    <Box w="100%" bg="var(--dark-purpledark-purple-1)" zIndex={10}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        h="80px"
        className="container mx-auto"
        {...props}
      >
        <Flex align="center">
          <A url="/">
            <Flex display="inline-flex" alignItems="center">
              <Image h="48px" src={`/static-v2/package@2x.svg`} />
              <Text className="font-bold text-2xl" color="var(--neutralneutral-0)" ml={1}>
                Kula
              </Text>
            </Flex>
          </A>
        </Flex>
        <Flex>
          {NAVIGATION.map((nav, idx) => {
            const isActive = isPathActive(nav.url)

            return (
              <A key={idx} url={nav.url}>
                <Flex align="center" justify="center" ml={3} color="var(--neutralneutral--1)">
                  <Text
                    className="mx-2 text-base capitalize font-bold"
                    color={isActive ? ACTIVE : 'inherit'}
                  >
                    {nav.title}
                  </Text>
                </Flex>
              </A>
            )
          })}
        </Flex>

        <Box flexBasis={{ base: '100%', md: 'auto' }}>
          <Flex
            align={['center', 'center', 'center', 'center']}
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            pt={[4, 4, 0, 0]}
          >
            <Link to="/claim">
              <Flex align="center" justify="center">
                <Icon
                  as={FiZap}
                  h="24px"
                  w="24px"
                  color={location.pathname === '/claim' ? '#f56565' : '#72727a'}
                />
                <KText
                  ml={1}
                  type="small-title"
                  fontWeight="500"
                  color={location.pathname === '/claim' ? '#f56565' : '#72727a'}
                >
                  Airdrop
                </KText>
              </Flex>
            </Link>
            <Box mx={2} borderLeft="1.5px solid #e5e5e6" height="16px"></Box>
            <SignInBtn size="sm" rounded="md" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
