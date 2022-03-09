import { Flex } from "@chakra-ui/react";

export default function Error(props) {
  return (
    <Flex h="calc(100vh - 80px - 88px - 80px)" justify="center" align="center">
      Some thing when wrong. Please try again!
    </Flex>
  );
}
