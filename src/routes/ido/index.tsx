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
} from '@chakra-ui/react'
import { ComponentProps, useState } from 'react'
import LandingDashboard from '../../components/Layout/LandingDashboard'
import { IdoWarning } from '../../components/modules/Ido/IdoWarning'

export default function IDO() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <LandingDashboard>
      <div className="px-5 mt-4">{!!isVisible && <IdoWarning onClose={handleClose} />}</div>
      <Tabs align="center" borderColor="var(--candy-3)">
        <TabList>
          <TabStyled>All</TabStyled>
          <TabStyled>Participated</TabStyled>
          <TabStyled>Saved</TabStyled>
        </TabList>

        <TabPanels textAlign="start">
          <TabPanel>
            <Box>
              <p className="text-[38px] text-center" style={{ color: 'var(--white)' }}>
                Upcoming Projects
              </p>
            </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </LandingDashboard>
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
