import {
  Box, Button, Heading, Image, Input, InputGroup, Spacer, Stack, Switch, Text
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { Contract } from 'near-api-js/lib/contract'
import { useStakingForm_Stake } from './StakingHooks'
import StakingStatsStore from './StakingStatsStore'

const darkPurple200 = '#2D225E'
const darkPurple600 = '#DFD0FA'
const darkPurple500 = '#9B8BD8'
const darkPurple300 = '#402D82'
const candy100 = '#D85988'
const candy300 = '#FF61C0'
const darkPurple0 = '#211A4A';
const natural0 = '#EEEDF6'
const natural200 = '#AFACC6'

type Props = {
  contract: Contract    // dev account
  contractFT: Contract  // KULA token contract
  contractIdo: Contract     // IDO contract
  contractStaking: Contract // Staking contract
  currentUser: any
  nearConfig: any
  walletConnection: any
}

export default observer(function StakingForm(props: Props) {

  const {
    frmStake_amount, set_frmStake_amount,
    frmStake_lock_for, set_frmStake_lock_for,
  } = useStakingForm_Stake(props, StakingStatsStore)

  return (
    <Box>
      <Stack
        bg={darkPurple200}
        rounded={"xl"}
        p={{ base: 8 }}
        maxW={{ lg: "lg" }}
      >
        <Stack
          textAlign="center"
          pb={12}
        >
          <Heading
            color={natural0}
            fontSize={{ base: "2xl" }}
          >
            Staking Token
          </Heading>
          <Text color={natural200} fontSize={{ base: "md" }}>
            Calculate your xKULA depending on the amount of stake tokens and your lock time.
          </Text>
        </Stack>

        <Box as={"form"} pb={6}>
          <Stack
            direction="row"
            mb={2}
            justify="center"
            align="center"
          >
            <Text color={natural200} fontWeight="bold" fontSize={{ base: "md" }}>
              Staking amount
            </Text>
            <Spacer />
            <Text color={natural200} fontSize={{ base: "sm" }}>
              Balance: 20.432 Kula ~ $100
            </Text>
          </Stack>
          <Stack
            direction="row"
            mx="-1px"
          >
            <InputGroup
            >
              <Input
                h={'52px'}
                borderRadius={'xl'}
                placeholder="400"
                bg={frmStake_amount ? darkPurple0 : darkPurple300}
                borderWidth={'2px'}
                borderColor={frmStake_amount ? darkPurple0 : darkPurple300}
                color={darkPurple600}
                _placeholder={{
                  color: darkPurple500,
                }}
                fontWeight="bold"
                _hover={{ bg: darkPurple0, borderColor: candy100 }}
                _focus={{ bg: darkPurple0, borderColor: candy100 }}
                value={frmStake_amount}
                onInput={(e) => set_frmStake_amount((e as any).target.value)}
              />
            </InputGroup>
            <Button
              h={'52px'}
              w={'64px'}
              display="flex"
              justifyContent="center"
              alignContent="center"
              bg={darkPurple300}
              borderRadius={'xl'}
              cursor="pointer"
              _hover={{}}
              _focus={{}}
              _active={{}}
              color={natural200}
            >
              <Text px="4px" fontWeight="bold" fontSize={{ base: "md" }}>
                Max
              </Text>
            </Button>
          </Stack>
        </Box>

        <Box pb={2}>
          <Stack
            direction="row"
            mx="-1px"
            justify="start"
            align="center"
          >
            <Switch
              sx={{
                "span": {
                  bg: darkPurple300
                },
                "span span": {
                  bg: "#211A4A"
                },
                "span:focus": {
                  boxShadow: "none"
                },
                "span[data-focus]": {
                  boxShadow: "none"
                },
              }}
              colorScheme="pink" id='get-x-kula' />

            <Text color={natural0} fontWeight="bold" fontSize={{ base: "md" }}>
              Get xKULA
            </Text>
            <Image
              ml={1}
              loading="lazy"
              borderRadius="20px"
              src={"/mstatic/icons/help.svg"}
              alt={`image`}
              h="18px"
              w="18px"
              objectFit={"cover"}
              cursor="pointer"

            />
          </Stack>
        </Box>

        <Box pb={10}>
          <Text
            mb={2}
            color={natural200} fontWeight="bold" fontSize={{ base: "md" }}>
            Lock
          </Text>
          <Stack
            direction="row"
            mx="-1px"
            justify="start"
            align="center"
          >
            <InputGroup
            >
              <Input
                h={'52px'}
                borderRadius={'xl'}
                placeholder="365"
                bg={frmStake_lock_for ? darkPurple0 : darkPurple300}
                borderWidth={'2px'}
                borderColor={frmStake_lock_for ? darkPurple0 : darkPurple300}
                color={darkPurple600}
                _placeholder={{
                  color: darkPurple500,
                }}
                fontWeight="bold"
                _hover={{ bg: darkPurple0, borderWidth: '2px', borderColor: candy100 }}
                _focus={{ bg: darkPurple0, borderWidth: '2px', borderColor: candy100 }}
                value={frmStake_lock_for}
                onInput={(e) => set_frmStake_lock_for((e as any).target.value)}
              />
            </InputGroup>
            <Button
              h={'52px'}
              w={'64px'}
              display="flex"
              justifyContent="center"
              alignContent="center"
              bg={darkPurple300}
              borderRadius={'xl'}
              cursor="pointer"
              _hover={{}}
              _focus={{}}
              _active={{}}
              color={natural200}
            >
              <Text px="4px" fontWeight="bold" fontSize={{ base: "md" }}>
                Days
              </Text>
            </Button>
          </Stack>
        </Box>

        <Button
          h={'52px'}
          display="flex"
          justifyContent="center"
          alignContent="center"
          bg={`linear-gradient(91.13deg, ${candy100} -4.51%, ${candy300} 102.47%)`}
          borderRadius={'xl'}
          cursor="pointer"
          _hover={{ bg: `linear-gradient(91.13deg, ${candy100} -4.51%, ${candy300} 102.47%)` }}
          _focus={{ bg: `linear-gradient(91.13deg, ${candy100} -4.51%, ${candy300} 102.47%)` }}
          _active={{ bg: `linear-gradient(91.13deg, ${candy100} -4.51%, ${candy300} 102.47%)` }}
          color={natural0}
        >
          <Text px="4px" fontWeight="bold" fontSize={{ base: "md" }}>
            Stake
          </Text>
        </Button>
        <Box pb={1} />
        <Button
          h={'52px'}
          display="flex"
          justifyContent="center"
          alignContent="center"
          bg={darkPurple300}
          borderRadius={'xl'}
          cursor="pointer"
          _hover={{ bg: darkPurple300 }}
          _focus={{ bg: darkPurple300 }}
          _active={{ bg: darkPurple300 }}
          color={natural0}
        >
          <Text px="4px" fontWeight="bold" fontSize={{ base: "md" }}>
            Connect wallet
          </Text>
        </Button>
      </Stack>
    </Box>
  );
})
