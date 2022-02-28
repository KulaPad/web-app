import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import HomeLayout from "../components/HomeLayout";
import { Link } from "react-router-dom";

export default function Landing(props) {
  const { contract, walletConnection, nearConfig, currentUser } = props;

  const signIn = () => {
    walletConnection.requestSignIn(nearConfig.contractName, "NEAR ToDo List");
  };

  const signOut = () => {
    walletConnection.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  return (
    <HomeLayout>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Fundraising platform on{" "}
          <Text as={"span"} color={"blue.400"}>
            NEAR
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          KulaPad is the go-to platform for the Near blockchain. Invest in the
          hottest Near projects, stake your tokens, trade on our DEX, manage
          your Near wallet and participate in our (future) governance.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Link to="/projects">
            <Button
              rounded={"full"}
              w="180px"
              size="lg"
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
            >
              Explore projects
            </Button>
          </Link>
          <Link to="/staking">
            <Button
              rounded={"full"}
              w="180px"
              size="lg"
              colorScheme={"green"}
              bg={"green.400"}
              _hover={{ bg: "green.500" }}
            >
              Stake token
            </Button>
          </Link>
        </Stack>
      </Stack>
    </HomeLayout>
  );
}
