import {
  Box,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
} from "@chakra-ui/react";


/*
import { Contract } from "near-api-js/lib/contract";

type Props = {
  contract: Contract    // dev account
  contractFT: Contract  // KULA token contract
  contractIdo: string     // IDO contract
  contractStaking: string // Staking contract
  currentUser: string
  nearConfig: string
  walletConnection: string
}
*/
export default function StakingForm(props) {
  // const {
  //   currentUser,
  //   contractStaking,
  //   contractFT,
  // } = props;
  // console.log('{default.Staking} currentUser: ', currentUser);
  // console.log('{default.Staking} contractStaking: ', contractStaking);
  // console.log('{default.Staking} contractFT: ', contractFT);


  return (
    <Box>
      <Stack
        bg={"gray.50"}
        rounded={"xl"}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
        maxW={{ lg: "lg" }}
      >
        <Stack spacing={4}>
          <Heading
            color={"gray.800"}
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          >
            Staking Token
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              !
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
            Stake 200 KULA for joining any project on KulaPad!
          </Text>
        </Stack>

        <Tabs
          mt={6}
          isFitted variant='enclosed'
          defaultIndex={0}
          // onChange={(index) => setTabIndex(index)} bg={colors[tabIndex]}
        >
          <TabList mb='1em'>
            <Tab>Stake</Tab>
            <Tab>Unstake</Tab>
            <Tab>Claim</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box as={"form"} mt={10}>
                <Stack spacing={4} mt={4}>
                  <InputGroup>
                    <InputLeftAddon children='Amount' />
                    <Input
                      placeholder="1,000"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                    <InputRightAddon children='KULA' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children='Lock for' />
                    <Input
                      placeholder="365"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                    <InputRightAddon children='days' />
                  </InputGroup>
                </Stack>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                >
                  STAKE
                </Button>
              </Box>

            </TabPanel>

            <TabPanel>

              <Box as={"form"} mt={10}>
                <Stack spacing={2} mt={4}>
                  <InputGroup>
                    <InputLeftAddon children='Amount' />
                    <Input
                      placeholder="1,000"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                    <InputRightAddon children='KULA' />
                  </InputGroup>
                  <Text align={"right"} color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                    Available to unstake: 1,000.28 KULA
                  </Text>
                </Stack>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, yellow.400,orange.400)"
                  color={"white"}
                  _hover={{
                    boxShadow: "xl",
                  }}
                >
                  UNSTAKE
                </Button>
              </Box>

            </TabPanel>

            <TabPanel>

              <Box as={"form"} mt={10}>
                <Stack spacing={2} mt={4}>
                  <InputGroup>
                    <InputLeftAddon children='Amount' />
                    <Input
                      placeholder="1,000"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                    <InputRightAddon children='KULA' />
                  </InputGroup>
                  <Text align={"right"} color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                    Available to claim: 100.9 KULA
                  </Text>
                </Stack>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, green.400,green.600)"
                  color={"white"}
                  _hover={{
                    boxShadow: "xl",
                  }}
                >
                  Claim KULA
                </Button>
              </Box>

            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
}
