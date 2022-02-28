import { Flex, Box, SlideFade } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomeLayout(props) {
  return (
    <Flex direction="column" align="center" m="0 auto" {...props}>
      <Header />
      <Box
        minH="calc(100vh - 68px - 88px)"
        maxW={{ xl: "1200px" }}
        margin="0 auto"
        px={8}
      >
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0, delay: 0 } }}
          // transition={{ duration: 0.4, delay: 0.2 }}
        >
          {props.children}
        </SlideFade>
      </Box>
      <Footer />
    </Flex>
  );
}
