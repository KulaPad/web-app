import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, HStack, Text } from "@chakra-ui/react";

import getConfig from "../../configs/config.js";
import { currency } from "../../utils/Number.ts";
import KulaFtStore from "../../components/Auth/KulaFtStore.ts";


const nearConfig = getConfig(process.env.NODE_ENV || "testnet");

const SignInBtn = (props) => {
  const handleClickSignIn = () => {
    window.walletConnection.requestSignIn(
      nearConfig.ftTokenContractName,
      "KULA Lauchpad"
    );
  };

  const handleClickSignOut = () => {
    window.walletConnection.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  const { balance: kula_balance } = KulaFtStore;
  useEffect(() => {
    KulaFtStore.fetchFtBalance(window.accountId)
  }, [window.accountId])


  if (window.accountId)
    return (
      <HStack>
        <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
          <b>{currency(kula_balance)} KULA</b>
        </Text>
        <Button onClick={handleClickSignOut} {...props}>
          {window.accountId} (sign out)
        </Button>
      </HStack>
    );

  return (
    <Button onClick={handleClickSignIn} {...props}>
      Sign In with Near
    </Button>
  );
};

export default observer(SignInBtn);
