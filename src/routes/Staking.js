import { UnlockIcon } from "@chakra-ui/icons";
import { useCallback, useEffect, useState } from "react";
import { Box, Container, SimpleGrid, Text, Image, AlertIcon, AlertTitle, AlertDescription, Alert, Button, HStack, useToast } from "@chakra-ui/react";

import HomeLayout from "../components/HomeLayout";
import KText from "../components/KText";
import StakingForm from "../components/Staking/StakingForm.tsx";
import StakingStats from "../components/Staking/StakingStats.tsx";
import { transactions, utils } from "near-api-js";
import {currency} from "../utils/Number.ts";
import { useHistoryUtil, useQuery } from "../services/router.ts";
import { useNEARWalletResponse } from "../utils/Near.ts";


function setStakedActivated(activated) {
  localStorage.setItem('StakedActivated', activated ? '1' : '0')
}

function getStakedStatus() {
  return !!parseInt(localStorage.getItem('StakedActivated'))
}

export default function Staking(props) {
  const {
    contractStaking,
    currentUser,
  } = props;

  const query = useQuery()
  const toast = useToast()
  const {setQuery, removeQuery} = useHistoryUtil()

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
  const {} = useNEARWalletResponse('active_stake', onError, onSuccess)


  return (
    <HomeLayout>
      {!stake_activated && <Alert
        mt={10}
        status='warning'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <HStack>
          <AlertIcon boxSize='28px' mr={0}/>
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Staking activation required!
          </AlertTitle>
        </HStack>
        <AlertDescription maxWidth='lg' mt={2}>
          <b>Staking</b> is the only way that provide you tickets
          - used for <b>buying token</b> in KulaPad.
        </AlertDescription>

        <Box mt={4}>
          <Button
            leftIcon={<UnlockIcon />} colorScheme='pink' variant='solid'
            onClick={activeStaking}
          >
            Unlock & activate Staking
          </Button>
        </Box>
      </Alert>}

      <Box position={"relative"} mt={20}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
        >
          <StakingForm {...props} />
          <StakingStats {...props} />
        </Container>
      </Box>

      <KText mt={20} type="semi-head" textAlign="center">
        Tier
      </KText>
      <Image
        margin="auto"
        mt={10}
        maxW="768px"
        mb={20}
        src={`/mstatic/tier.png`}
      />

      <KText mt={40} type="semi-head" textAlign="center">
        Staking Leader Board
      </KText>
      <Image margin="auto"  mb={20} src={`/mstatic/leader_board.png`} />
    </HomeLayout>
  );
}
