import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Progress,
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import Typography from "../KText";

const FormSales = ({ project }) => {
  return (
    <Box as={"form"} mt={2} w="100%">
      <Typography type="text">
        Sales close:{" "}
        {project.sale_end_date &&
          moment(+project.sale_end_date / 1000000)
            .utc()
            .format("hh:mma DD/MM/YYYY")}
      </Typography>
      <Typography mt={2} type="text"></Typography>

      <Progress
        mt={1}
        w="100%"
        borderRadius="md"
        size="md"
        hasStripe
        value={64}
      />
      <Typography type="caption">
        Balance: 10,000/25,000 {project?.token_symbol}
      </Typography>
      <Flex mt={2}>
        <InputGroup flex={1}>
          <Input placeholder="100" bg={"gray.100"} border={0} />
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
          bgGradient="linear(to-r, red.400,pink.400)"
          color={"white"}
          _hover={{
            bgGradient: "linear(to-r, red.400,pink.400)",
            boxShadow: "xl",
          }}
          minW="100px"
        >
          Buy
        </Button>
      </Flex>
      <Typography mt={2} type="text" color="gray.600">
        *Estimate:{" "}
        <Box fontWeight="bold" as="span" color="hotpink">
          1 {project?.token_symbol}
        </Box>{" "}
      </Typography>
    </Box>
  );
};

export default FormSales;
