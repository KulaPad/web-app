import { Box, Image } from '@chakra-ui/react'

export default function IdoProjectInfo() {
  return (
    <Box className="flex w-full">
      <Box className="items-end pr-4 w-2/12 hidden lg:flex">
        <Image src="/static-v2/pokemon-l.svg" className="w-full" />
      </Box>
      <Box
        bg="var(--neutral-dark-2)"
        className="flex flex-wrap flex-col sm:flex-row rounded-[32px] p-8 flex-1"
      >
        <Box className="w-full sm:w-1/2 pb-8 sm:pb-0 sm:pr-8 flex flex-col gap-y-3">
          <Row label="Whitelist start time" value="2022-01-01 19:00 (GMT)" />
          <Row label="Pool open" value="2022-01-01 19:00 (GMT)" />
          <Row label="Pool close" value="2022-01-01 19:00 (GMT)" />
          <Row label="Token distribution" value="2022-01-01 19:00 (GMT)" />
        </Box>
        <Box
          className="w-full sm:w-1/2 pt-8 border-t-2 sm:border-t-0 sm:pt-0 sm:border-l-2 sm:pl-8 flex flex-col gap-y-3 "
          borderColor="var(--neutral-dark-3)"
        >
          <Row label="Symbol" value="SLRS" />
          <Row label="Token raise" value="480.000 SLRS" />
          <Row label="Token price" value="0.05 USDC" />
          <Row label="Max allocation" value="200 USDC" />
          <Row label="Min. allocation" value="50 USDC" />
          <Row label="Hard cap" value="24.000 USDC" />
          <Row label="Hard cap. fill" value="12.000 USDC" />
          <Row label="Hard cap. fill percent" value="50%" />
        </Box>
      </Box>

      <Box className="items-start pl-4 w-2/12 hidden lg:flex">
        <Image src="/static-v2/pokemon-r.svg" className="w-full" />
      </Box>
    </Box>
  )
}

const Row = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box className="text-lg flex justify-between">
      <Box color="var(--neutral-light-2)" className="">
        {label}
      </Box>
      <Box color="var(--neutral-light-0)" className="font-bold">
        {value}
      </Box>
    </Box>
  )
}
