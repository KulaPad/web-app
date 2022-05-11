import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FcBullish,
  FcDonate,
  FcConferenceCall,
} from "react-icons/fc";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import HomeLayout from "../components/HomeLayout";
import KText from "../components/KText";
import Loading from "../components/Loading";
import { Project } from "./Projects";
import Stake from "../components/modules/Staking/Stake/index";

export default function Landing(props) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect get projects from window.contractIdo
  useEffect(() => {
    if (!!window?.contractIdo) getProjects();
  }, []);

  const getProjects = async () => {
    await window?.contractIdo?.get_projects().then((_projects) => {
      setProjects(_projects);
    });
    setIsLoading(false);
  };

  const upcomingProjects = projects.filter((project) => {
    return project?.status === "Preparation";
  });

  return (
    <>
      <Blur
        position={"absolute"}
        top={40}
        right={-60}
        style={{ filter: "blur(80px)" }}
      />

      <Stack
        textAlign={"left"}
        align={"left"}
        spacing={{ base: 2, md: 4 }}
        pt={{ base: 40, md: 40 }}
        maxW={{ xl: "1200px" }}
        margin="0 auto"
        height="calc(100vh - 60px)"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Stack spacing={{ base: 2, md: 4 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Fundraising platform on{" "}
              <Text as={"span"} color={"#f56565"}>
                NEAR
              </Text>
            </Heading>
            <Text color={"gray.800"} maxW={"3xl"}>
              KulaPad is the go-to platform for the Near blockchain. Invest in
              the hottest Near projects, stake your tokens, trade on our DEX,
              manage your Near wallet and participate in our (future)
              governance.
            </Text>
            <Stack spacing={6} direction={"row"}>
              <Link to="/projects">
                <Button
                  // rounded={"full"}
                  w="180px"
                  size="lg"
                  colorScheme={"pink"}
                  bg={"#f56565"}
                  _hover={{ bg: "#f56565" }}
                >
                  Explore projects
                </Button>
              </Link>
              <Link to="/staking">
                <Button
                  // rounded={"full"}
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
          <Stack pos="relative" align={"center"}>
            <Image
              top={-10}
              right={10}
              pos="absolute"
              w={{ base: "10vw", md: "25vw" }}
              src="/near_coin.png"
            />
          </Stack>
        </SimpleGrid>
      </Stack>

      <KText mb={8} type="semi-head" textAlign="center">
        Features
      </KText>

      <SimpleThreeColumns />

      <KText mt={40} type="semi-head" textAlign="center">
        Featured Projects
      </KText>
      <KText ml={0.5} mb={12} type="normal" textAlign="center">
        Upcoming and active top tier IDOs & crypto launchpad offerings.
      </KText>

      {isLoading && <Loading />}
      {!isLoading && <Project projects={upcomingProjects} />}

      <KText mt={40} mb={12} type="semi-head" textAlign="center">
        Staking KULA Token
      </KText>

      <Stake {...props} />

      <Box mb={40} />
    </>
  );
}

const Feature = ({ title, text, icon }) => {
  return (
    <Stack boxShadow="xs" borderRadius="lg" px={6} py={4} bg="white" zIndex={2}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

function SimpleThreeColumns() {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"IDO Platform"}
          text={
            "Platform on Near with many feature: Staking Ticket, Social Ticket, Referral Ticket. Help and invest in potential projects for Near."
          }
        />
        <Feature
          icon={<Icon as={FcConferenceCall} w={10} h={10} />}
          title={"KOLA Fund"}
          text={
            "An investment fund managed by Kula Foundation that uses 18% of KULA tokens to invest in supporting startup projects, profits will be used to buyback KULA tokens."
          }
        />
        <Feature
          icon={<Icon as={FcBullish} w={10} h={10} />}
          title={"DAO & AMM Investing"}
          text={
            "Join and vote which project to launch and help the Near community grow stronger. Allow project to open the token-pool directly help and supporting new project startup Liquidity."
          }
        />
      </SimpleGrid>
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "40vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
      height="420px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
