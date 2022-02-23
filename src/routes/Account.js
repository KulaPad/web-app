import { Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Account(props) {
  const { currentUser } = props;

  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header />
      {currentUser?.accountId}
      <Footer />
    </Flex>
  );
}
