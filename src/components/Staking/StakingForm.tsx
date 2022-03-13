import {
  Box,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Contract } from "near-api-js/lib/contract";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import * as moment from "moment";

import StakingStatsStore from "./StakingStatsStore.ts";
import KulaFtStore from "../Auth/KulaFtStore.ts";
import {currency} from "../../utils/Number.ts";
import {useStakingForm_Stake, useStakingForm_UnStake, useStakingForm_Withdraw} from "./StakingHooks.ts";


type Props = {
  contract: Contract    // dev account
  contractFT: Contract  // KULA token contract
  contractIdo: Contract     // IDO contract
  contractStaking: Contract // Staking contract
  currentUser: any
  nearConfig: any
  walletConnection: any
}
export default observer(function StakingForm(props: Props) {
  const [tabIndex, setTabIndex] = useState(0);

  const {
    stake_balance,
    unstake_balance,
    unlock_timestamp,
  } = StakingStatsStore;

  const {
    loadStakeInfo,
    stake,
    next_tier_name,
    next_stake_balance_left,
    frmStake_amount, set_frmStake_amount,
    frmStake_lock_for, set_frmStake_lock_for,
    frmStake_submitting,
    estimated_new_ticket_received,
  } = useStakingForm_Stake(props, StakingStatsStore)

  const {
    loadUnStakeInfo,
    unstake,
    frmUnStake_amount, set_frmUnStake_amount,
    stake_lock_released,
    available_to_unstake_balance,
  } = useStakingForm_UnStake(props, StakingStatsStore)

  const {
    withdraw,
    frmWithdraw_amount, set_frmWithdraw_amount,
  } = useStakingForm_Withdraw(props, StakingStatsStore)

  const {balance: kula_balance} = KulaFtStore;
  console.log('{StakingForm} balance: ', kula_balance);

  const {currentUser} = props;
  const loggedIn = !!currentUser;


  useEffect(() => {
    switch (tabIndex) {
      case 0:
        loadStakeInfo();
        break;
      case 1:
        loadUnStakeInfo();
        break;
      case 2:
        break;
      default:
        throw new Error("Invalid tab index: " + tabIndex);
    }
  }, [tabIndex])

  return (
    <Box>
      <Stack
        bg={"gray.50"}
        rounded={"xl"}
        h={578}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
        maxW={{ lg: "lg" }}
      >
        <Stack spacing={4}>
          <Heading
            color={"gray.800"}
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          >
            Staking Token
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              !
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
            Stake & lock 200 KULA for joining any project on KulaPad!
          </Text>
        </Stack>

        <Tabs
          mt={6}
          isFitted variant='enclosed'
          defaultIndex={0}
          onChange={setTabIndex}
        >
          <TabList mb='1em'>
            <Tab>Stake</Tab>
            <Tab>Unstake</Tab>
            <Tab>Withdraw</Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="Stake">
              <Box as={"form"} mt={10}>
                <Stack spacing={4} mt={4}>
                  <InputGroup>
                    <InputLeftAddon children='Amount' />
                    <Input
                      placeholder="1,000"
                      bg={"gray.100"}
                      border={0}
                      color={"black.500"}
                      _placeholder={{
                        color: "gray.400",
                      }}
                      value={frmStake_amount}
                      onInput={(e) => set_frmStake_amount(e.target.value)}
                    />
                    <InputRightAddon children='KULA' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children='Lock for' />
                    <Input
                      placeholder="365"
                      bg={"gray.100"}
                      border={0}
                      color={"black.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      value={frmStake_lock_for}
                      onInput={(e) => set_frmStake_lock_for(e.target.value)}
                    />
                    <InputRightAddon children='days' />
                  </InputGroup>
                  <Box>
                    <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                      Current balance: <b>{currency(kula_balance, 2)} KULA</b>
                    </Text>
                    <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                      Staked: <b>{currency(stake_balance, 2)} KULA</b>
                    </Text>
                    <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                      Stake more <b>{currency(next_stake_balance_left, 2)} KULA</b> to reach the next
                      <b> {next_tier_name}</b>
                    </Text>
                    <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }} mt={4}>
                      Estimated ticket status: <b>{estimated_new_ticket_received.Allocation} Allocation</b> + <b>{estimated_new_ticket_received.Staking} Staking</b>
                    </Text>
                  </Box>
                </Stack>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                  onClick={stake}
                  isLoading={frmStake_submitting}
                >
                  STAKE
                </Button>
              </Box>

            </TabPanel>

            <TabPanel className="UnStake">

              <Box as={"form"} mt={10}>
                <Stack spacing={2} mt={4}>
                  <InputGroup>
                    <InputLeftAddon children='Amount' />
                    <Input
                      placeholder="1,000"
                      bg={"gray.100"}
                      border={0}
                      color={"black.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      value={frmUnStake_amount}
                      onInput={(e) => set_frmUnStake_amount(e.target.value)}
                    />
                    <InputRightAddon children='KULA' />
                  </InputGroup>
                  <Box>
                    <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                      Available to unstake: <b>{currency(available_to_unstake_balance, 2)} KULA</b>
                    </Text>
                    <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                      <span>
                        Next unstake schedule:
                        {loggedIn &&
                          <b style={{color: stake_lock_released ? 'green' : 'red'}}>{moment(unlock_timestamp / 1e6).format('MMM D, YYYY HH:mm:ss')}</b>
                        }
                      </span>
                    </Text>
                  </Box>
                </Stack>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, yellow.400,orange.400)"
                  color={"white"}
                  _hover={{
                    boxShadow: "xl",
                  }}
                  onClick={unstake}
                >
                  UNSTAKE
                </Button>
              </Box>

            </TabPanel>

            <TabPanel className="Withdraw">
              <Box as={"form"} mt={10}>
                <Stack spacing={2} mt={4}>
                  <InputGroup>
                    <InputLeftAddon children='Amount' />
                    <Input
                      placeholder="1,000"
                      bg={"gray.100"}
                      border={0}
                      color={"black.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      // value={frmWithdraw_amount}
                      disabled
                      value={currency(unstake_balance, 2)}
                    />
                    <InputRightAddon children='KULA' />
                  </InputGroup>
                  <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                    Available to withdraw: <b>{currency(unstake_balance, 2)} KULA</b>
                  </Text>
                </Stack>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, green.400,green.600)"
                  color={"white"}
                  _hover={{
                    boxShadow: "xl",
                  }}
                  onClick={withdraw}
                  disabled={unstake_balance <= 0}
                >
                  Withdraw {currency(unstake_balance, 2)} KULA
                </Button>
              </Box>

            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
})
