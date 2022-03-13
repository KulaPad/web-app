import { Box, Button } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

import { DataLine } from "./LaunchpadDetail";

const FormPreparation = ({ project }) => {
  return (
    <Box w="full">
      <Box mt={3} borderBottom="3px solid #6655c3cc" />

      <DataLine
        title={"Whitelist open"}
        value={
          project.whitelist_start_date &&
          moment(+project.whitelist_start_date / 1000000)
            .utc()
            .format("hh:mma DD/MM/YYYY")
        }
      />
      <DataLine title={"Type"} value={project?.sale_type} />

      <Link to={"/staking"} target="_blank" rel="noopener noreferrer">
        <Button
          size="sm"
          color="white"
          _hover={{
            bgGradient: "linear(to-r, red.400,pink.400)",
            boxShadow: "xl",
          }}
          bgGradient="linear(to-r, red.400,pink.400)"
          mt={3}
        >
          Staking tokens and waiting to join
        </Button>
      </Link>
    </Box>
  );
};

export default FormPreparation;
