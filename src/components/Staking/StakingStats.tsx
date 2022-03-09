import {
  Avatar,
  AvatarGroup,
  Box, Flex,
  Heading,
  HStack,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useBreakpointValue,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { useEffect, useState } from "react";


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

export default function StakingStats(props) {
  const [] = useState()

  const getAccountInfo = (a) => {
    contractStaking
      .get_account_info({
        account_id: currentUser?.accountId,
      })
      .then((accountJson) => {
        console.log('{get_account_info} accountJson: ', accountJson);
      });
  };
  const get_pool_info = () => {
    contractStaking
      .get_pool_info()
      .then((poolInfo) => {
        console.log('{get_pool_info} poolInfo: ', poolInfo);
      });
  };

  useEffect(() => {
    get_pool_info()
  }, [])

  return (
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


        <HStack mt={10}>
          <Stat>
            <StatLabel>total_stake_balance</StatLabel>
            <StatNumber
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >0.00 KULA</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>total_reward</StatLabel>
            <StatNumber
              bgGradient="linear(to-r, green.600,cyan.600)"
              bgClip="text"
            >0.00 KULA</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>total_stakers</StatLabel>
            <StatNumber
              bgGradient="linear(to-r, orange.400,red.400)"
              bgClip="text"
            >0.00 KULA</StatNumber>
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
  )
}
