import { Box, Button } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import Typography from "../KText";

const FormWhitelist = ({ project }) => {
  const onClickJoinWhiteList = () => {};

  return (
    <Box as={"form"} mt={2}>
      <Typography type="text">
        Whitelist close:{" "}
        {project.whitelist_start_date &&
          moment(+project.whitelist_start_date / 1000000)
            .utc()
            .format("hh:mma DD/MM/YYYY")}
      </Typography>
      <Typography mt={1} type="text">
        Your tickets: 10
      </Typography>

      <Button
        fontFamily={"heading"}
        mt={2}
        size="sm"
        // isDisabled={true}
        bgGradient="linear(to-r, red.400,pink.400)"
        color={"white"}
        _hover={{
          bgGradient: "linear(to-r, red.400,pink.400)",
          boxShadow: "xl",
        }}
      >
        {true && "Join Whitelist (1 ticket)"}
        {false && "Already join whitelist please wait for the result"}
      </Button>
    </Box>
  );
};

export default FormWhitelist;
