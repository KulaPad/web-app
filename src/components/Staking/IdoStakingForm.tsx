import {
  Box, Button, Heading, Image, Input, InputGroup, Spacer, Stack, Switch, Text
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { Contract } from 'near-api-js/lib/contract'
import { useStakingForm_Stake } from './StakingHooks'
import StakingStatsStore from './StakingStatsStore'

const darkModeBg = 'var(--dark-mode-bg)';
const candy3 = 'var(--candy-3)'
const candyLinearGradient = 'var(--candy-linear-gradient)';
const neutralDark2 = 'var(--neutral-dark-2)'
const neutralDark3 = 'var(--neutral-dark-3)'
const neutralDark5 = 'var(--neutral-dark-5)'
const neutralDark6 = 'var(--neutral-dark-6)'
const neutralLight0 = 'var(--neutral-light-0)'
const neutralLight2 = 'var(--neutral-light-2)'

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
        bg={neutralDark2}
        rounded={"xl"}
        p={{ base: 8 }}
        maxW={{ lg: "lg" }}
      >
        <Stack
          textAlign="center"
          pb={12}
        >
          <Heading
            color={neutralLight0}
            fontSize={{ base: "xl" }}
          >
            Staking Token
          </Heading>
          <Text color={neutralLight2} fontSize={{ base: "md" }}>
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
            <Text color={neutralLight2} fontWeight="bold" fontSize={{ base: "md" }}>
              Staking amount
            </Text>
            <Spacer />
            <Text color={neutralLight2} fontSize={{ base: "sm" }}>
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
                bg={frmStake_amount ? darkModeBg : neutralDark3}
                borderWidth={'2px'}
                borderColor={frmStake_amount ? darkModeBg : neutralDark3}
                color={neutralDark6}
                _placeholder={{
                  color: neutralDark5,
                }}
                fontWeight="bold"
                _hover={{ bg: darkModeBg, borderColor: candy3 }}
                _focus={{ bg: darkModeBg, borderColor: candy3 }}
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
              bg={neutralDark3}
              borderRadius={'xl'}
              cursor="pointer"
              _hover={{}}
              _focus={{}}
              _active={{}}
              color={neutralLight2}
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
                  bg: neutralDark3
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

            <Text color={neutralLight0} fontWeight="bold" fontSize={{ base: "md" }}>
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

        <Box pb={6}>
          <Text
            mb={2}
            color={neutralLight2} fontWeight="bold" fontSize={{ base: "md" }}>
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
                bg={frmStake_lock_for ? darkModeBg : neutralDark3}
                borderWidth={'2px'}
                borderColor={frmStake_lock_for ? darkModeBg : neutralDark3}
                color={neutralDark6}
                _placeholder={{
                  color: neutralDark5,
                }}
                fontWeight="bold"
                _hover={{ bg: darkModeBg, borderWidth: '2px', borderColor: candy3 }}
                _focus={{ bg: darkModeBg, borderWidth: '2px', borderColor: candy3 }}
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
              bg={neutralDark3}
              borderRadius={'xl'}
              cursor="pointer"
              _hover={{}}
              _focus={{}}
              _active={{}}
              color={neutralLight2}
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
          bg={candyLinearGradient}
          borderRadius={'md'}
          cursor="pointer"
          _hover={{ bg: candyLinearGradient }}
          _focus={{ bg: candyLinearGradient }}
          _active={{ bg: candyLinearGradient }}
          color={neutralLight0}
        >
          <Text px="4px" fontWeight="bold" fontSize={{ base: "md" }}>
            Stake
          </Text>
        </Button>
        <Box mb={1} />
        <Button
          h={'52px'}
          display="flex"
          justifyContent="center"
          alignContent="center"
          bg={neutralDark3}
          borderRadius={'md'}
          cursor="pointer"
          _hover={{ bg: neutralDark3 }}
          _focus={{ bg: neutralDark3 }}
          _active={{ bg: neutralDark3 }}
          color={neutralLight0}
        >
          <Text px="4px" fontWeight="bold" fontSize={{ base: "md" }}>
            Connect wallet
          </Text>
        </Button>
      </Stack>
    </Box>
  );
})
