import { Badge, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import IdoContent from '../../components/modules/Ido/detail/IdoContent'
import IdoCardDetail from '../../components/modules/Ido/detail/IdoCardDetail'
import IdoCardInfo from '../../components/modules/Ido/detail/IdoCardInfo'
import IdoProjectInfo from '../../components/modules/Ido/detail/IdoProjectInfo'
import RoadMap from '../../components/modules/Ido/detail/RoadMap'
import WarningBanner from '../../components/WarningBanner'
import { IDO_WARNING } from '../../utils/constant'

const dumpyData = {
  id: '62774d162d93ea5cf963f979',
  isActive: false,
  totalRaise: '$342,779',
  personalAllocation: '$1554 MAX',

  status: 'Allowlist open',
  open: '7h 24m 53s',
  metadata: {
    name: 'Alberta Benson',
    tags: ['Defi', 'GameFi', 'Metaverse'],
    avatar: '/static-v2/avatar-1.png',
    bg: '/static-v2/token-1.png',
    hashtags: ['CCZ'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
}
export default function IdoDetail(props) {
  const params = useParams()
  const [isVisible, setIsVisible] = useState(true)

  const turnOffWarning = () => {
    setIsVisible(false)
  }

  console.warn('params', params)

  const data = dumpyData

  return (
    <>
      <Box>{!!isVisible && <WarningBanner title={IDO_WARNING} onClose={turnOffWarning} />}</Box>
      <Box className="flex flex-wrap mt-8">
        <Box className="w-full md:w-6/12 lg:w-7/12">
          <IdoCardDetail data={data} />
        </Box>
        <Box className="w-full mt-2 md:mt-0 md:w-6/12 lg:w-5/12 px-2">
          <RoadMap />
        </Box>
        <Box className="flex gap-3 py-8">
          <Block label="Pool type" tag="Community" />
          <Block label="Requirement to join" tag="Free" />
          <Block label="Sale type" tag="Shared" />
          <Block label="Distribution type" tag="Full" />
        </Box>
        <Box className="flex w-full mt-3">
          <IdoCardInfo />
        </Box>
        <Box
          className="pt-16 pb-10 w-full flex justify-center text-[38px]"
          color="var(--neutral-light-0)"
        >
          Project Information
        </Box>
        <Box className="flex w-full mt-3">
          <IdoProjectInfo />
        </Box>
        <Box className="flex w-full mt-28">
          <IdoContent />
        </Box>
      </Box>
    </>
  )
}

const Block = ({ label, tag }) => {
  return (
    <Box>
      <Box className="uppercase text-sm font-bold">{label}</Box>
      <Badge
        colorScheme="purple"
        className="!rounded-[8px] py-[2px] !px-[12px] border !capitalize"
        bg="var(--neutral-dark-3)"
        borderColor="var(--neutral-dark-4)"
        color="var(--neutral-dark-6)"
      >
        {tag}
      </Badge>
    </Box>
  )
}
