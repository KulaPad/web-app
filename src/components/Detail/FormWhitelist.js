import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import clipboard from "clipboardy";
import copy from "copy-to-clipboard";
import moment from "moment";
import { transactions } from "near-api-js";
import party, { Color } from "party-js";
import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Typography from "../KText";
import { DataLine } from "./LaunchpadDetail";
import SocialImage from "./SocialImage";

const FormWhitelist = ({ project }) => {
  const toast = useToast();
  const [searchParams] = useSearchParams();

  const [transactionHashes, setTransactionHashes] = useState();
  const [accountInfo, setAccountInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [whitelisted, setWhitelisted] = useState(false);
  const buttonEl = useRef(null);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    if (currentParams?.transactionHashes)
      setTransactionHashes(currentParams?.transactionHashes);
  }, [searchParams]);

  useEffect(() => {
    // TODO: call func contractIdo.update tier info
  }, [transactionHashes]);

  const checkIsWhitelisted = async () => {
    if (!window?.accountId) return;
    if (!project?.id) return;
    const res = await window?.contractIdo?.is_whitelist_by_account_id({
      project_id: +project?.id,
      account_id: window.accountId,
    });

    setWhitelisted(res);
    if (res && buttonEl?.current)
      party.sparkles(buttonEl?.current, {
        count: [20, 20],
        size: [1, 1.5],
        color: Color.fromHex("#f56565"),
      });
    return res;
  };

  useEffect(() => {
    checkIsWhitelisted();
  }, [window.accountId, project?.id]);

  const getAccountInfo = async () => {
    if (!window?.accountId) return;
    const res = await window?.contractIdo?.get_project_account_info({
      project_id: +project?.id,
      account_id: window.accountId,
    });
    console.log("setAccountInfo::", res);
    setAccountInfo(res);
    return res;
  };

  useEffect(() => {
    getAccountInfo();
  }, [window.accountId]);

  const onClickJoinWhiteList = async (e) => {
    // If user already join call for update info and check again
    if (whitelisted) {
      setLoading(true);
      try {
        await checkIsWhitelisted();
      } finally {
        setLoading(false);
      }
      return;
    }

    setLoading(true);
    try {
      // TODO: wait contract imlp cross contract call and remove call mutil actions
      // const res = await window?.contractIdo?.register_whitelist({
      //   project_id: +project?.id,
      // });
      const res = await window.account.signAndSendTransaction({
        receiverId: window.contractIdo.contractId,
        actions: [
          transactions.functionCall(
            "register_whitelist",
            { project_id: +project?.id },
            10000000000000,
            ""
          ),
          transactions.functionCall(
            "update_staking_tickets",
            { project_id: +project?.id },
            250000000000000,
            ""
          ),
        ],
      });
      console.log("res::", res);
      party.sparkles(e.target, {
        count: [20, 20],
        size: [1, 1.5],
        color: Color.fromHex("#f56565"),
      });
      toast({
        title: `Join whitelist success!`,
        position: "top",
        isClosable: true,
        status: "success",
        duration: 3000,
      });
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      toast({
        title: e?.message || "Unknown error occurred. please try again later!",
        position: "top",
        isClosable: true,
        status: "error",
        duration: 1500,
      });
    }
  };

  const onCopyClipboardRefLink = () => {
    try {
      navigator.clipboard.writeText(refUrl);
      copy(refUrl);
      clipboard.writeSync(refUrl);
    } catch (e) {}

    toast({
      title: `Copy to clipboard success!`,
      position: "top",
      isClosable: true,
      status: "success",
      duration: 3000,
    });
  };

  const refUrl = window.location.href + "?ref=" + uuidv4();

  return (
    <Box w="full" as={"form"}>
      <Box mt={3} borderBottom="3px solid #6655c3cc" />

      <DataLine
        title={"Whitelist close"}
        value={accountInfo?.whitelist_info?.tier || ""}
      />

      <DataLine
        title={"Your tier"}
        value={
          project.whitelist_start_date &&
          moment(+project.whitelist_start_date / 1000000)
            .utc()
            .format("hh:mma DD/MM/YYYY")
        }
      />

      <DataLine
        title={"Staking tickets"}
        value={accountInfo?.whitelist_info?.tier || ""}
      />

      <DataLine
        title={"Social tickets"}
        value={accountInfo?.whitelist_info?.no_of_social_tickets}
      />

      <DataLine
        title={"Referral tickets"}
        value={accountInfo?.whitelist_info?.no_of_referral_tickets}
      />

      <DataLine
        title={"Your allocations"}
        value={accountInfo?.whitelist_info?.no_of_allocations}
      />

      <Button
        fontFamily={"heading"}
        mt={3}
        // size="sm"
        isLoading={loading}
        // isDisabled={whitelisted}
        bgGradient="linear(to-r, red.400,pink.400)"
        color={"white"}
        _hover={{
          bgGradient: "linear(to-r, red.400,pink.400)",
          boxShadow: "xl",
        }}
        onClick={(e) => onClickJoinWhiteList(e)}
        ref={buttonEl}
      >
        {!whitelisted && "Register Whitelist"}
        {whitelisted && "Update Tier Info"}
      </Button>
      <Box mt={4} borderBottom="1px solid" borderColor="gray.200" />

      <Flex mt={3} direction="row">
        <Flex flex={1} direction="column" align="start">
          <Typography
            textAlign="center"
            fontWeight="bold"
            type="caption"
            mb={1}
          >
            Refer your friend though your referral url to receive more tickets(1
            ticket/1ref)
          </Typography>
          {refUrl && (
            <Flex w="full" direction="column">
              <Flex mb={2} direction="row" justify="center" align="center">
                <InputGroup>
                  <Input
                    width="100%"
                    bg="gray.200"
                    border="1px solid"
                    borderColor="gray.200"
                    variant="filled"
                    placeholder=""
                    borderRadius={24}
                    fontWeight="bold"
                    readOnly
                    _hover={{
                      bg: "gray.200",
                    }}
                    _active={{
                      bg: "gray.200",
                    }}
                    defaultValue={refUrl}
                  />
                  <InputRightElement width="100px" justifyContent="right">
                    <Button
                      w="full"
                      borderRadius={24}
                      colorScheme="blue"
                      onClick={onCopyClipboardRefLink}
                    >
                      Copy
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Box w={2}></Box>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={`https://twitter.com/intent/tweet?text=${refUrl}`}
                >
                  <SocialImage imageLink="/mstatic/icons/twitter_white.svg" />
                </Link>
                <Box w={2}></Box>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={`https://telegram.me/share/url?url=${refUrl}&text=MoonRaise Airdrop`}
                >
                  <SocialImage imageLink="/mstatic/icons/telegram_white.svg" />
                </Link>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default FormWhitelist;
