import { WarningIcon } from '@chakra-ui/icons'
import { Flex, Image } from '@chakra-ui/react'
import { useState } from 'react'

interface IdoWarningProps {
  onClose: () => void
}
export function IdoWarning(props: IdoWarningProps) {
  return (
    <Flex
      bg="linear-gradient(90deg, #3E3CC9 -1.42%, rgba(251, 62, 255, 0) 101.86%);"
      className="justify-between items-center min-h-[40px] px-3 rounded-[8px]"
    >
      <div className="inline-flex items-center">
        <WarningIcon />
        <span className="ml-2">Please visit our documentation before purchasing Kula</span>
      </div>
      <button onClick={props.onClose}>
        <Image h="24px" src={`/static-v2/vuesax-bulk-close-square@2x.svg`} />
      </button>
    </Flex>
  )
}
