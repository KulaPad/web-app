import { Box, Button, Image, Progress, Text } from '@chakra-ui/react'

interface PoolCardInfoProps {}
export default function PoolCardInfo(props: PoolCardInfoProps) {
  const process = 62
  return (
    <Box bg="var(--neutral-dark-0)" className="flex flex-col w-full rounded-[32px] p-8">
      <Box>
        <Button
          colorScheme="purple"
          bg="var(--neutral-dark-3)"
          className="!rounded-[32px] !text-xl !py-2 !px-14"
        >
          <Image src="/static-v2/icon-preparation.svg" />
          <span className="ml-1">Preparation</span>
        </Button>
      </Box>
      <Box className="flex flex-wrap md:flex-nowrap mt-3">
        <Box
          bg="var(--neutral-dark-2)"
          borderColor="var(--neutral-dark-4)"
          className="border rounded-[32px] w-full md:w-8/12 lg:w-8/12 flex flex-col p-8"
        >
          <Box className="flex justify-between">
            <Block label="Total raise" value="480.000 SLRS" />
            <Block label="Token price" value="0.05 USDC" />
            <Block label="Min. allocation" value="50 USDC" />
            <Block label="Max. allocation" value="200 USDC" />
          </Box>
          <Box className="py-7 flex items-center">
            <Progress
              value={process}
              size="sm"
              colorScheme="cyan"
              rounded="3xl"
              className="w-full"
            />
            <Text color="var(--neutral-dark-6)" className="text-[15px] ml-2 opacity-60">
              {process}%
            </Text>
          </Box>
          <Box className="flex justify-between">
            <Block label="Your deposit" value="0 USDC" />
            <Block label="Your share" value="0%" />
            <Block label="Your allocation" value="480.000 SLRS" />
          </Box>
        </Box>
        <Box
          bg="var(--neutral-dark-2)"
          borderColor="var(--neutral-dark-4)"
          className="border rounded-[32px] w-full md:w-4/12 flex items-center justify-center p-8 ml-0 mt-4 md:ml-2 md:mt-0 md:p-0"
        >
          <Block label="The pool will open for sales" value="at 2021-07-16 13:00 UTC" revert />
        </Box>
      </Box>
    </Box>
  )
}

const Block = ({ label, value, revert = false }) => {
  return (
    <Box className={`inline-flex ${revert ? 'flex-col-reverse' : 'flex-col'}`}>
      <Box as="p" color="var(--white)" className="text-xl font-bold">
        {value}
      </Box>
      <Box as="h3" color="var(--neutral-dark-5)" className="text-sm text-center">
        {label}
      </Box>
    </Box>
  )
}
