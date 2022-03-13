import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Progress,
  useToast,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { CountUp } from "use-count-up";
import party, { Color } from "party-js";
import { transactions, utils } from "near-api-js";

import { DataLine } from "./LaunchpadDetail";
import Typography from "../KText";

const FormSales = ({ project }) => {
  const toast = useToast();

  const [tokenBuy, setTokenBuy] = useState();
  const [loading, setLoading] = useState(false);
  const [accountInfo, setAccountInfo] = useState();

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

  const calculateDeposit = async () => {
    if (!window?.accountId) return;
    const res =
      await window?.contractIdo?.calculate_must_attach_deposit_amount_by_account_id(
        {
          project_id: +project?.id,
          account_id: window.accountId,
        }
      );
    if (res) setTokenBuy(utils.format.formatNearAmount(res));
    return res;
  };

  useEffect(() => {
    calculateDeposit();
  }, [window.accountId]);

  const onClickBuyToken = async (e) => {
    setLoading(true);
    try {
      console.log(
        "window.contractIdo.contractId::",
        window.contractIdo.contractId
      );

      if (e.target)
        party.sparkles(e.target, {
          count: [20, 20],
          size: [1, 1.5],
          color: Color.fromHex("#f56565"),
        });

      await window.account.signAndSendTransaction({
        receiverId: window.contractIdo.contractId,
        actions: [
          transactions.functionCall(
            "buy_token",
            { project_id: +project?.id },
            10000000000000,
            utils.format.parseNearAmount(`${tokenBuy}`)
          ),
        ],
      });

      console.log("signAndSendTransaction::", window.contractIdo.contractId);
    } catch (e) {
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
  console.log("project::", project);

  return (
    <Box as={"form"} w="full">
      <Box mt={3} borderBottom="3px solid #6655c3cc" />

      <DataLine
        title={"Sales close"}
        value={
          project.sale_end_date &&
          moment(+project.sale_end_date / 1000000)
            .utc()
            .format("hh:mma DD/MM/YYYY")
        }
      />

      <DataLine
        title={"Total tickets"}
        value={
          +accountInfo?.whitelist_info?.no_of_social_tickets +
          +accountInfo?.whitelist_info?.no_of_referral_tickets +
          +accountInfo?.whitelist_info?.no_of_staking_tickets
        }
      />

      <DataLine
        title={"Total allocations"}
        value={accountInfo?.whitelist_info?.no_of_allocations}
      />

      <DataLine
        title={"Allocation per ticket"}
        value={project?.token_amount_per_sale_slot}
      />

      {accountInfo?.sale_info?.funding_amount &&
        +accountInfo?.sale_info?.funding_amount > 0 && (
          <DataLine
            title={"Funding amount"}
            value={
              utils.format.formatNearAmount(
                accountInfo?.sale_info?.funding_amount
              ) +
              " Near / " +
              (tokenBuy || 0) / project?.token_sale_rate +
              " " +
              project?.token_symbol
            }
          />
        )}

      <Progress
        mt={3}
        w="100%"
        borderRadius="md"
        size="md"
        hasStripe
        value={64}
      />
      <Typography mt={1} type="caption">
        Balance: 10,000/25,000 {project?.token_symbol}
      </Typography>
      {!(
        accountInfo?.sale_info?.funding_amount &&
        +accountInfo?.sale_info?.funding_amount > 0
      ) && (
        <Flex mt={3}>
          <InputGroup flex={1}>
            <Input
              placeholder="100"
              bg={"gray.100"}
              border={0}
              type="number"
              value={tokenBuy}
              onInput={(e) => setTokenBuy(+e.target.value)}
            />
            <InputRightAddon
              children={
                <Flex justify="center" align="center">
                  {project?.fund_symbol}
                  <Image
                    ml={2}
                    loading="lazy"
                    borderRadius="20px"
                    src={"/mstatic/icons/near.svg"}
                    alt={`image`}
                    h="22px"
                    w="22px"
                    objectFit={"cover"}
                  />
                </Flex>
              }
            />
          </InputGroup>
          <Button
            ml={3}
            fontFamily={"heading"}
            // isDisabled={true}
            isLoading={loading}
            bgGradient="linear(to-r, red.400,pink.400)"
            color={"white"}
            _hover={{
              bgGradient: "linear(to-r, red.400,pink.400)",
              boxShadow: "xl",
            }}
            minW="100px"
            onClick={(e) => onClickBuyToken(e)}
          >
            Buy
          </Button>
        </Flex>
      )}
      {!(
        accountInfo?.sale_info?.funding_amount &&
        +accountInfo?.sale_info?.funding_amount > 0
      ) && (
        <Typography mt={2} type="text" color="gray.600">
          *Estimate:
          <Box fontWeight="bold" as="span" color="hotpink">
            {" "}
            <CountUp
              isCounting={true}
              key={(tokenBuy || 0) / project?.token_sale_rate}
              end={(tokenBuy || 0) / project?.token_sale_rate}
              duration={0.8}
            />{" "}
            {project?.token_symbol}
          </Box>{" "}
        </Typography>
      )}
    </Box>
  );
};

export default FormSales;
