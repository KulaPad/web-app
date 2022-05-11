import { Badge, Box, Image, Text, Button } from '@chakra-ui/react'
import { useMemo } from 'react'
import SocialToolbar from '../../../SocialToolbar'

const schemas = ['red', 'purple', 'green']
interface PoolCardDetailProps {
  overlay?: boolean
  data?: any
}
export default function PoolCardDetail(props: PoolCardDetailProps) {
  const { data, overlay = false } = props
  const tags = useMemo(() => {
    return data?.metadata?.tags || []
  }, [data])

  const hashtags = useMemo(() => {
    return (data?.metadata?.hashtags || []).map((tag) => `#${tag}`)
  }, [data])

  const label = useMemo(() => {
    return data?.status
  }, [data])

  const avatar = data?.metadata?.avatar || ''
  const bg = data?.metadata?.bg || ''
  const name = data?.metadata?.name || ''
  const description = data?.metadata?.description || ''

  return (
    <Box
      className="rounded-[24px] flex overflow-hidden flex-col pb-8 relative h-full"
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
      <Box className="px-8 flex flex-col justify-between">
        <>
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
              {name}
            </Text>
          </div>
          <div>
            <Text className="text-base" color="var(--blue-3)">
              {hashtags.join(' ')}
            </Text>
          </div>
          <div>
            <Text className="text-base" color="var(--blue-3)">
              {description}
            </Text>
          </div>
          <div className="mt-3">
            <SocialToolbar />
          </div>
        </>
      </Box>
    </Box>
  )
}
