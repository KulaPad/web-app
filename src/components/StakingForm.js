import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  HStack,
  TagLabel,
  Tag,
  WrapItem,
  Wrap,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
} from "@chakra-ui/react";
import KText from "../components/KText";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

export default function StakingForm() {
  return (
    <Box position={"relative"} mt={20}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
      >
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




        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Your{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >Stake Info</Text>
          </Heading>

          <Box>
            <Wrap>
              <WrapItem>
                <Avatar name='tier' src='https://static.wikia.nocookie.net/warpath/images/7/7e/VIP_Point_Icon.png' />
              </WrapItem>
              <Text
                fontSize={"3xl"}
                fontWeight={700}
                bgGradient="linear(to-r, purple.400,red.400)"
                bgClip="text"
              >Tier 4</Text>
            </Wrap>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }} mt={4}>
              Your estimated ticket amount is <b>1000</b>
            </Text>

            <HStack mt={10}>
              <Stat>
                <StatLabel>Balance</StatLabel>
                <StatNumber
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >0.00 KULA</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Staked</StatLabel>
                <StatNumber
                  bgGradient="linear(to-r, green.600,cyan.600)"
                  bgClip="text"
                >0.00 KULA</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Unstaked</StatLabel>
                <StatNumber
                  bgGradient="linear(to-r, orange.400,red.400)"
                  bgClip="text"
                >0.00 KULA</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
              </Stat>
            </HStack>

            {/* APR */}
            <HStack mt={10} justifyContent={"flex-start"}>
              <Stat>
                <StatLabel>Staking APR</StatLabel>
                <StatNumber
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >18%</StatNumber>
              </Stat>
              <Stat>
                <StatNumber
                  color="pink.400"
                >→</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Total Reward Earned</StatLabel>
                <StatNumber
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >1,234 KULA</StatNumber>
              </Stat>
            </HStack>

          </Box>

          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              width={useBreakpointValue({ base: "44px", md: "60px" })}
              height={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
