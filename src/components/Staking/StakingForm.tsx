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
import {ReactElement, useCallback, useEffect, useState} from "react";
import {AccountJson, TierNames} from "../../utils/KulaContract.ts";
import StakingStatsStore from "./StakingStatsStore.ts";
import {currency} from "../../utils/Number.ts";
import {getNextTier, TierMinBalance} from "../../utils/KulaStakingHelper.ts";
import * as moment from "moment";

type Props = {
  contract: Contract    // dev account
  contractFT: Contract  // KULA token contract
  contractIdo: Contract     // IDO contract
  contractStaking: Contract // Staking contract
  currentUser: any
  nearConfig: any
  walletConnection: any
}
export default function StakingForm(props: Props) {
  const {
    contractStaking,
  } = props;

  const {
    stake_balance,
    tier,
    unstake_balance,
    unlock_timestamp,
  } = StakingStatsStore;

  const [tabIndex, setTabIndex] = useState(0);
  const [frmStake_amount, set_frmStake_amount] = useState('');
  const [frmStake_lock_for, set_frmStake_lock_for] = useState('');
  const [frmUnStake_amount, set_frmUnStake_amount] = useState('');
  const [frmClaim_amount, set_frmClaim_amount] = useState('');


  const next_tier = getNextTier(tier);
  const next_tier_name = TierNames[next_tier];
  const next_stake_balance_left = TierMinBalance[next_tier] - stake_balance;
  const stake_lock_released = unlock_timestamp >= Date.now();
  const available_to_unstake_balance = stake_lock_released ? stake_balance : 0;

  // TODO: Validate the form input

  const stake = useCallback(() => {
    contractStaking
      // @ts-ignore
      .stake({

      })
      .then((res) => {
        console.log('{stake} res: ', res);
      })
      .catch((e: any) => {
        console.error('{stake} e: ', e);
      });
  }, [])

  const unstake = useCallback(() => {
    contractStaking
      // @ts-ignore
      .unstake({

      })
      .then((res) => {
        console.log('{unstake} res: ', res);
      })
      .catch((e: any) => {
        console.error('{unstake} e: ', e);
      });
  }, [])

  const claim = useCallback(() => {
    contractStaking
      // @ts-ignore
      .harvest({

      })
      .then((res) => {
        console.log('{claim} res: ', res);
      })
      .catch((e: any) => {
        console.error('{claim} e: ', e);
      });
  }, [])

  const loadStakeInfo = () => {

  }
  const loadUnStakeInfo = () => {

  }
  const loadClaimInfo = () => {

  }

  useEffect(() => {
    switch (tabIndex) {
      case 0:
        loadStakeInfo();
        break;
      case 1:
        loadUnStakeInfo();
        break;
      case 2:
        loadClaimInfo();
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
            Stake 200 KULA for joining any project on KulaPad!
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
            <Tab>Claim</Tab>
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
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
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
                      color={"gray.500"}
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
                      Staked: <b>{currency(stake_balance, 2)} KULA</b>
                    </Text>
                    <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                      Stake more <b>{currency(next_stake_balance_left, 2)} KULA</b> to reach the next
                      <b> {next_tier_name}</b>
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
                      color={"gray.500"}
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
                      {!stake_lock_released && (
                        <span>
                      Can unstake after: <b>{moment(unlock_timestamp).format('MMM D, YYYY HH:mm:ss')}</b>
                    </span>
                      )}
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

            <TabPanel className="Claim">
              <Box as={"form"} mt={10}>
                <Stack spacing={2} mt={4}>
                  <InputGroup>
                    <InputLeftAddon children='Amount' />
                    <Input
                      placeholder="1,000"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      value={frmClaim_amount}
                      onInput={(e) => set_frmClaim_amount(e.target.value)}
                    />
                    <InputRightAddon children='KULA' />
                  </InputGroup>
                  <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                    Available to claim: <b>{currency(unstake_balance, 2)} KULA</b>
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
                  onClick={claim}
                >
                  Claim KULA
                </Button>
              </Box>

            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
}
