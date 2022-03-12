import { Box, Button } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import Typography from "../KText";

const FormDistribution = ({ project }) => {
  return (
    <Box as={"form"}>
      <Typography mt={1} type="text">
        Distribution date:{" "}
        {project.sale_end_date &&
          moment(+project.sale_end_date / 1000000)
            .utc()
            .format("hh:mma DD/MM/YYYY")}
      </Typography>
      <Typography mt={1} type="text">
        Type: {project?.sale_type}
      </Typography>

      <Typography mt={1} type="text">
        Your token:{" "}
        <Box fontWeight="bold" as="span" color="hotpink">
          1000 {project?.token_symbol}{" "}
        </Box>
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
        Claim
      </Button>
    </Box>
  );
};

export default FormDistribution;
