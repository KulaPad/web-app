import React, { useState, useEffect } from "react";
import { utils, transactions } from "near-api-js";

import { Flex, Box, SimpleGrid, Button, Link } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import KText from "../components/KText";
import SignInBtn from "../components/SignInBtn";
import { parseTokenWithDecimals } from "../utils/token";

export default function Account(props) {
  const { currentUser } = props;
  const [balance, setBalance] = useState(0);
  const [storageBalance, setStorageBalance] = useState(0);
  const [isLoadingClaim, setIsLoadingClaim] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getBalance = () => {
    window.contractFT
      .ft_balance_of({
        account_id: currentUser?.accountId,
      })
      .then((_balance) => {
        console.log(_balance);
        setBalance(_balance);
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getStorageBalanceOf = async () => {
    const _balance = await window.contractFT.storage_balance_of({
      account_id: currentUser?.accountId,
    });
    setStorageBalance(_balance?.total);
    return _balance;
  };

  // Get wallet balance from the contract
  useEffect(() => {
    if (!!currentUser?.accountId) {
      getBalance();
      getStorageBalanceOf();
    }
  }, [currentUser, getBalance, getStorageBalanceOf]);

  // Handle click claim token
  const handleClickClaim = async () => {
    setIsLoadingClaim(true);
    const _balance = await getStorageBalanceOf();

    if (+utils.format.formatNearAmount(_balance?.total) !== 0) {
      await window.contractFT.claim_testnet_token({});
    } else {
      const result = await window.account.signAndSendTransaction({
        receiverId: window.contractFT.contractId,
        actions: [
          transactions.functionCall(
            "storage_deposit",
            { account_id: currentUser?.accountId },
            10000000000000,
            utils.format.parseNearAmount("0.01")
          ),
          transactions.functionCall(
            "claim_testnet_token",
            {},
            250000000000000,
            ""
          ),
        ],
      });
      console.log("Result:: ", result);
    }

    getBalance();
    setIsLoadingClaim(false);
  };

  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header />

      <Box minH="80vh">
        {!currentUser?.accountId && "Please sign in to claim"}
        {!!currentUser?.accountId && (
          <SimpleGrid mt={6}>
            <Box border="1px solid #A0AEC0" borderRadius="lg" px={6} py={4}>
              <KText mt={2}>{currentUser?.accountId}</KText>
              <KText mt={2} type="small-title">
                KULA balance: {parseTokenWithDecimals(balance, 8)} (KULA)
              </KText>
              <KText mt={2} type="small-title">
                Storage Balance: {utils.format.formatNearAmount(storageBalance)}{" "}
                (Near)
              </KText>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://explorer.testnet.near.org/accounts/${currentUser?.accountId}`}
              >
                <KText textDecoration="underline" mt={2} type="text">
                  <Link>
                    https://explorer.testnet.near.org/accounts/
                    {currentUser?.accountId}
                  </Link>
                </KText>
              </a>
              <Button
                isLoading={isLoadingClaim}
                borderRadius="8px"
                py="4"
                px="4"
                mt={4}
                lineHeight="1"
                size="md"
                onClick={() => handleClickClaim()}
                colorScheme="blue"
              >
                Claim 200 KULA token
              </Button>
            </Box>
          </SimpleGrid>
        )}
      </Box>

      <Footer />
    </Flex>
  );
}
