import { Box, Button, useToast } from "@chakra-ui/react";
import moment from "moment";
import party, { Color } from "party-js";
import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { transactions, utils } from "near-api-js";
import Typography from "../KText";

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

  return (
    <Box as={"form"} mt={1}>
      <Typography type="text">
        Whitelist close:{" "}
        {project.whitelist_start_date &&
          moment(+project.whitelist_start_date / 1000000)
            .utc()
            .format("hh:mma DD/MM/YYYY")}
      </Typography>
      <Typography mt={1} type="text">
        Your tier: {accountInfo?.whitelist_info?.tier || ""}
      </Typography>
      <Typography mt={1} type="text">
        Your tickets: {accountInfo?.whitelist_info?.no_of_staking_tickets || ""}
      </Typography>

      <Button
        fontFamily={"heading"}
        mt={2}
        size="sm"
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
        {!whitelisted && "Join Whitelist (1 ticket)"}
        {whitelisted &&
          "Joined whitelist successfully. Please wait for the result!"}
      </Button>
    </Box>
  );
};

export default FormWhitelist;
