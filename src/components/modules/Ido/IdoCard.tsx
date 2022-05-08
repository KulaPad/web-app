import { Badge, Box, Image, Text, Button } from '@chakra-ui/react'
import { useMemo } from 'react'
import SocialToolbar from '../../SocialToolbar'

const schemas = ['red', 'purple', 'green']
interface IdoCardProps {
  overlay?: boolean
  data?: any
}
export default function IdoCard(props: IdoCardProps) {
  const { data, overlay = false } = props
  const tags = useMemo(() => {
    return data?.metadata?.tags || []
  }, [data])

  const hashtags = useMemo(() => {
    return ['#CCZ']
  }, [])

  const label = useMemo(() => {
    return data?.status
  }, [data])

  const totalRaise = data?.totalRaise || ''
  const personalAllocation = data?.personalAllocation || ''
  const contributionOpen = data?.open || ''
  const avatar = data?.metadata?.avatar || ''
  const bg = data?.metadata?.bg || ''

  const isHaventRelease = !data

  return (
    <Box
      className="rounded-[24px] flex overflow-hidden flex-col pb-8 relative"
      bg="var(--neutral-dark-2)"
    >
      {!!label && (
        <div className="absolute z-[2] top-2 right-2">
          <Badge colorScheme="teal" className="!rounded-[8px] py-[2px] px-[12px]">
            {label}
          </Badge>
        </div>
      )}
      {!!overlay && (
        <div className="absolute z-[1] bg-black opacity-75 w-full h-full top-0 left-0"></div>
      )}
      {!!isHaventRelease && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-white font-bold z-[1]">
          ?
        </div>
      )}
      <div className="h-[180px] relative">
        <div className="h-full w-full overflow-hidden">
          <Image w="100%" src={bg} />
        </div>
        <Box
          className="absolute -bottom-[44px] left-8 inline-flex justify-center rounded-[16px] overflow-hidden w-[88px]"
          bg="var(--grey-0)"
        >
          <Image src={avatar} className="w-[72px]" />
        </Box>
      </div>
      <Box className="px-8">
        <div className="py-2 flex">
          <div className="w-[88px]"></div>
          <div
            className="flex flex-wrap gap-2 pl-2 min-h-[20px]"
            style={{ width: 'calc(100% - 88px)' }}
          >
            {tags.map((tag, idx) => (
              <Badge
                key={idx}
                colorScheme={schemas[idx % schemas.length]}
                className="!rounded-[8px] py-[2px] !px-[12px]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Text className="text-2xl" color="var(--neutral-light-0)">
            CryptoCitizen
          </Text>
        </div>
        <div>
          <Text className="text-base" color="var(--blue-3)">
            {hashtags.join(' ')}
          </Text>
        </div>
        <div className="flex justify-between mt-3">
          <Text as="span" color="var(--neutral-light-2)" className="text-lg font-bold">
            Total raise
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-lg font-bold">
            {totalRaise}
          </Text>
        </div>
        <div className="flex justify-between">
          <Text as="span" color="var(--neutral-light-2)" className="text-lg font-bold">
            Personal Allocation
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-lg font-bold">
            {personalAllocation}
          </Text>
        </div>
        <div className="flex justify-between">
          <Text as="span" color="var(--neutral-light-2)" className="text-lg font-bold">
            Contribution open
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-lg font-bold">
            {contributionOpen}
          </Text>
        </div>
        <div className="mt-3">
          <SocialToolbar />
        </div>
        <div className="mt-4">
          <Button colorScheme="purple" bg="var(--neutral-dark-3)" className="!w-full">
            Token Sale
          </Button>
        </div>
      </Box>
    </Box>
  )
}
