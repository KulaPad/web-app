import { Box, Button } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Typography from "../KText";

const FormPreparation = ({ project }) => {
  return (
    <Box>
      <Typography mt={1} type="text">
        Whitelist open:{" "}
        {project.whitelist_start_date &&
          moment(+project.whitelist_start_date / 1000000)
            .utc()
            .format("hh:mma DD/MM/YYYY")}
      </Typography>

      <Link to={"/staking"} target="_blank" rel="noopener noreferrer">
        <Button size="sm" colorScheme="blue" mt={1}>
          Staking tokens and waiting to join
        </Button>
      </Link>
      <Typography mt={1} type="caption">
        *Required: Cost{" "}
        <Box as="span" color="orange">
          1 ticket
        </Box>{" "}
        to join this whitelist
      </Typography>
    </Box>
  );
};

export default FormPreparation;
