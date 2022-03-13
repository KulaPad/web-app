import { Box, Button } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { DataLine } from "./LaunchpadDetail";
import Typography from "../KText";

const FormDistribution = ({ project }) => {
  return (
    <Box w="full" as={"form"}>
      <Box mt={3} borderBottom="3px solid #6655c3cc" />

      <DataLine
        title={"Distribution date"}
        value={
          project.sale_end_date &&
          moment(+project.sale_end_date / 1000000)
            .utc()
            .format("hh:mma DD/MM/YYYY")
        }
      />

      <DataLine title={"Type"} value={project?.sale_type} />
      <DataLine title={"Your token"} value={"1000 " + project?.token_symbol} />

      <Button
        fontFamily={"heading"}
        mt={3}
        minW="100px"
        size="sm"
        bgGradient="linear(to-r, red.400,pink.400)"
        color={"white"}
        _hover={{
          bgGradient: "linear(to-r, red.400,pink.400)",
          boxShadow: "xl",
        }}
      >
        Claim
      </Button>
    </Box>
  );
};

export default FormDistribution;
