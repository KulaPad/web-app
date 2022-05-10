import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  styled,
  ComponentWithAs,
  TabProps,
  TabsProps,
  Box,
  Text,
} from '@chakra-ui/react'
import { ComponentProps, useMemo, useState } from 'react'
import LandingDashboard from '../../components/Layout/LandingDashboard'
import IdoCard from '../../components/modules/Ido/IdoCard'
import WarningBanner from '../../components/WarningBanner'

const dumpyData = [
  {
    id: '62774d16448eae43646220f7',
    isActive: false,
    totalRaise: '$648,738',
    personalAllocation: '$1999 MAX',
    status: 'Allowlist open',
    open: '7h 24m 53s',
    metadata: {
      name: 'Mindy Britt',
      tags: ['Defi', 'GameFi', 'Metaverse'],
      avatar: '/static-v2/avatar-1.png',
      bg: '/static-v2/token-1.png',
      hashtags: ['CCZ'],
    },
  },
  {
    id: '62774d162d93ea5cf963f979',
    isActive: false,
    totalRaise: '$342,779',
    personalAllocation: '$1554 MAX',

    status: 'Allowlist open',
    open: '7h 24m 53s',
    metadata: {
      name: 'Alberta Benson',
      tags: ['Defi', 'GameFi', 'Metaverse'],
      avatar: '/static-v2/avatar-1.png',
      bg: '/static-v2/token-1.png',
      hashtags: ['CCZ'],
    },
  },
  {
    id: '62774d169b9f46a8daf7315c',
    isActive: false,
    totalRaise: '$797,939',
    personalAllocation: '$1241 MAX',
    status: 'Allowlist open',
    open: '7h 24m 53s',
    metadata: {
      name: 'Patel Walter',
      tags: ['Defi', 'GameFi', 'Metaverse'],
      bg: '/static-v2/token-1.png',
      avatar: '/static-v2/avatar-1.png',
      hashtags: ['CCZ'],
    },
  },
  {
    id: '62774d169762790fd6d5dffe',
    isActive: false,
    totalRaise: '$352,203',
    personalAllocation: '$1741 MAX',
    avatar: '/static-v2/avatar-1.png',
    status: 'Allowlist open',
    open: '7h 24m 53s',
    metadata: {
      name: 'Corina Francis',
      tags: ['ullamco', 'cupidatat', 'et', 'est', 'quis', 'officia', 'laborum'],
      bg: '/static-v2/token-1.png',
      avatar: '/static-v2/avatar-1.png',
      hashtags: ['CCZ'],
    },
  },
  null,
  null,
]
export default function IDO() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  const upCommingCard = {
    id: '62774d16448eae43646220f7',
    isActive: false,
    totalRaise: '$648,738',
    personalAllocation: '$1999 MAX',
    status: 'Allowlist open',
    open: '7h 24m 53s',
    metadata: {
      name: 'Mindy Britt',
      tags: ['Defi', 'GameFi', 'Metaverse'],
      avatar: '/static-v2/avatar-1.png',
      bg: '/static-v2/token-1.png',
      hashtags: ['CCZ'],
    },
  }

  const comingSoon = useMemo(() => {
    return {
      id: '62774d16448eae43646220f7',
      isActive: false,
      totalRaise: '???',
      personalAllocation: '$??? MAX',
      status: 'Coming soon',
      open: '7h 24m 53s',
      metadata: {
        name: 'Mindy Britt',
        tags: ['???', '???', '???'],
        avatar: '/static-v2/avatar-1.png',
        bg: '/static-v2/coming-soon.svg',
        hashtags: ['???'],
      },
    }
  }, [])

  const idoCards = useMemo(() => [...dumpyData], [])

  return (
    <>
      <div className="px-5 mt-4">{!!isVisible && <WarningBanner onClose={handleClose} />}</div>
      <Tabs align="center" borderColor="var(--candy-3)">
        <TabList>
          <TabStyled>All</TabStyled>
          <TabStyled>Participated</TabStyled>
          <TabStyled>Saved</TabStyled>
        </TabList>

        <TabPanels textAlign="start">
          <TabPanel>
            <Box>
              <Text as="h3" className="text-[38px] text-center" color="var(--white)">
                Upcoming Projects
              </Text>
              <div className="flex flex-wrap mt-8">
                <Box className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                  <IdoCard overlay data={comingSoon} />
                </Box>
                <Box className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                  <IdoCard data={upCommingCard} />
                </Box>
                <Box className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                  <IdoCard overlay data={comingSoon} />
                </Box>
              </div>
            </Box>
            <Box className="mt-16">
              <Text as="h3" className="text-[38px] text-center" color="var(--white)">
                Opening
              </Text>
              <div className="flex flex-wrap mt-8">
                {idoCards.map((item, idx) => (
                  <Box key={idx} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                    <IdoCard overlay={!item} data={item} />
                  </Box>
                ))}
              </div>
            </Box>
          </TabPanel>
          <TabPanel>
            <p>Participated</p>
          </TabPanel>
          <TabPanel>
            <p>Saved</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

const TabStyled = (props: ComponentProps<typeof Tab>) => (
  <Tab
    _selected={{
      color: 'var(--candy-3)',
      borderBottom: '5px solid var(--candy-3)',
    }}
    {...props}
  />
)
