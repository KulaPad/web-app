import {
  ComponentProps,
  useCallback,
  useState,
} from 'react';

import {
  transactions,
  utils,
} from 'near-api-js';

import {
  Container,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from '@chakra-ui/react';

import WarningBanner from '../components/WarningBanner';
import MyAccount from '../components/modules/Staking/MyAccount/index';
import Stake from '../components/modules/Staking/Stake/index';
import {
  getStakedStatus,
  setStakedActivated,
} from '../components/Staking/StakingHooks';
import {
  useHistoryUtil,
  useQuery,
} from '../services/router';

export default function Staking(props) {
  const {
    contractStaking,
    currentUser,
  } = props;

  const query = useQuery()
  const toast = useToast()
  const { setQuery, removeQuery } = useHistoryUtil()
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  const stake_activated = getStakedStatus();

  const activeStaking = useCallback(async () => {
    setQuery('feature', 'active_stake')
    setQuery('feature_data', JSON.stringify({}))

    // @ts-ignore
    const result = await window.account.signAndSendTransaction({
      receiverId: contractStaking.contractId,
      actions: [
        transactions.functionCall(
          "storage_deposit",
          { account_id: currentUser?.accountId },
          10000000000000,
          utils.format.parseNearAmount("0.05")
        ),
      ],
    });

    console.log('{activeStaking} result: ', result);
  }, []);

  const onError = (msg, feature_data) => {
    toast({
      title: `Staking activation failed: ${msg}`,
      position: 'top',
      isClosable: true,
      status: 'error',
      duration: 6000,
    })
  }
  const onSuccess = (tx_hash, feature_data) => {
    setStakedActivated(true)
    toast({
      title: `Staking feature was activated successfully | tx_hash: ${tx_hash}`,
      position: 'top',
      isClosable: true,
      status: 'success',
      duration: 10000,
    })
  }

  return (
    <Stack pb={'40px'} direction='row' justify='center'>
      <Image d={{ base: "none", xl: "block" }} alignSelf="end" src={'/static-v2/mascot-1.png'} className="w-[220px]" />
      <Container minH={'800px'} maxW={"872px"}>
        <div className="mt-4 mb-4">{!!isVisible && <WarningBanner onClose={handleClose} />}</div>
        <Tabs align="center" borderColor="var(--candy-3)">
          <TabList>
            <TabStyled>Stake</TabStyled>
            <TabStyled>My account</TabStyled>
          </TabList>
          <TabPanels textAlign="start">
            <TabPanel
              p={0}
            >
              <Stake {...props} />
            </TabPanel>
            <TabPanel p={0}>
              <MyAccount {...props} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Image
        d={{ base: "none", xl: "block" }}
        alignSelf="center"
        src={'/static-v2/mascot-2.png'} className="w-[180px]" />
    </Stack>
  );
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
