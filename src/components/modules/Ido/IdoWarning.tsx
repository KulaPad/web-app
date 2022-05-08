import { Icon } from '@chakra-ui/icons'
import { Flex, Image } from '@chakra-ui/react'

interface IdoWarningProps {
  onClose: () => void
}
export default function IdoWarning(props: IdoWarningProps) {
  return (
    <Flex
      bg="linear-gradient(90deg, #3E3CC9 -1.42%, rgba(251, 62, 255, 0) 101.86%);"
      className="justify-between items-center min-h-[40px] px-3 rounded-[8px]"
    >
      <div className="inline-flex items-center">
        <Icon viewBox='0 0 21 21' >
          <path d="M10.7563 12.91C10.3463 12.91 10.0063 12.57 10.0063 12.16V7.16003C10.0063 6.75003 10.3463 6.41003 10.7563 6.41003C11.1663 6.41003 11.5063 6.75003 11.5063 7.16003V12.16C11.5063 12.57 11.1663 12.91 10.7563 12.91Z" fill="#4F3CC9" />
          <path d="M10.7563 12.91C10.3463 12.91 10.0063 12.57 10.0063 12.16V7.16003C10.0063 6.75003 10.3463 6.41003 10.7563 6.41003C11.1663 6.41003 11.5063 6.75003 11.5063 7.16003V12.16C11.5063 12.57 11.1663 12.91 10.7563 12.91Z" fill="white" fill-opacity="0.8" />
          <path d="M10.7563 16.16C10.6963 16.16 10.6263 16.15 10.5563 16.14C10.4963 16.13 10.4363 16.11 10.3763 16.08C10.3163 16.06 10.2563 16.03 10.1963 15.99C10.1463 15.95 10.0963 15.91 10.0463 15.87C9.86635 15.68 9.75635 15.42 9.75635 15.16C9.75635 14.9 9.86635 14.64 10.0463 14.45C10.0963 14.41 10.1463 14.37 10.1963 14.33C10.2563 14.29 10.3163 14.26 10.3763 14.24C10.4363 14.21 10.4963 14.19 10.5563 14.18C10.6863 14.15 10.8263 14.15 10.9463 14.18C11.0163 14.19 11.0763 14.21 11.1363 14.24C11.1963 14.26 11.2563 14.29 11.3163 14.33C11.3663 14.37 11.4163 14.41 11.4663 14.45C11.6463 14.64 11.7563 14.9 11.7563 15.16C11.7563 15.42 11.6463 15.68 11.4663 15.87C11.4163 15.91 11.3663 15.95 11.3163 15.99C11.2563 16.03 11.1963 16.06 11.1363 16.08C11.0763 16.11 11.0163 16.13 10.9463 16.14C10.8863 16.15 10.8163 16.16 10.7563 16.16Z" fill="#4F3CC9" />
          <path d="M10.7563 16.16C10.6963 16.16 10.6263 16.15 10.5563 16.14C10.4963 16.13 10.4363 16.11 10.3763 16.08C10.3163 16.06 10.2563 16.03 10.1963 15.99C10.1463 15.95 10.0963 15.91 10.0463 15.87C9.86635 15.68 9.75635 15.42 9.75635 15.16C9.75635 14.9 9.86635 14.64 10.0463 14.45C10.0963 14.41 10.1463 14.37 10.1963 14.33C10.2563 14.29 10.3163 14.26 10.3763 14.24C10.4363 14.21 10.4963 14.19 10.5563 14.18C10.6863 14.15 10.8263 14.15 10.9463 14.18C11.0163 14.19 11.0763 14.21 11.1363 14.24C11.1963 14.26 11.2563 14.29 11.3163 14.33C11.3663 14.37 11.4163 14.41 11.4663 14.45C11.6463 14.64 11.7563 14.9 11.7563 15.16C11.7563 15.42 11.6463 15.68 11.4663 15.87C11.4163 15.91 11.3663 15.95 11.3163 15.99C11.2563 16.03 11.1963 16.06 11.1363 16.08C11.0763 16.11 11.0163 16.13 10.9463 16.14C10.8863 16.15 10.8163 16.16 10.7563 16.16Z" fill="white" fill-opacity="0.8" />
          <path d="M16.8163 20.32H4.69632C2.74632 20.32 1.25632 19.61 0.496324 18.33C-0.253676 17.05 -0.153677 15.4 0.796323 13.69L6.85632 2.79C7.85632 0.99 9.23632 0 10.7563 0C12.2763 0 13.6563 0.99 14.6563 2.79L20.7163 13.7C21.6663 15.41 21.7763 17.05 21.0163 18.34C20.2563 19.61 18.7663 20.32 16.8163 20.32ZM10.7563 1.5C9.81632 1.5 8.89632 2.22 8.16632 3.52L2.11632 14.43C1.43632 15.65 1.32632 16.77 1.79632 17.58C2.26632 18.39 3.30632 18.83 4.70632 18.83H16.8263C18.2263 18.83 19.2563 18.39 19.7363 17.58C20.2163 16.77 20.0963 15.66 19.4163 14.43L13.3463 3.52C12.6163 2.22 11.6963 1.5 10.7563 1.5Z" fill="#4F3CC9" />
          <path d="M16.8163 20.32H4.69632C2.74632 20.32 1.25632 19.61 0.496324 18.33C-0.253676 17.05 -0.153677 15.4 0.796323 13.69L6.85632 2.79C7.85632 0.99 9.23632 0 10.7563 0C12.2763 0 13.6563 0.99 14.6563 2.79L20.7163 13.7C21.6663 15.41 21.7763 17.05 21.0163 18.34C20.2563 19.61 18.7663 20.32 16.8163 20.32ZM10.7563 1.5C9.81632 1.5 8.89632 2.22 8.16632 3.52L2.11632 14.43C1.43632 15.65 1.32632 16.77 1.79632 17.58C2.26632 18.39 3.30632 18.83 4.70632 18.83H16.8263C18.2263 18.83 19.2563 18.39 19.7363 17.58C20.2163 16.77 20.0963 15.66 19.4163 14.43L13.3463 3.52C12.6163 2.22 11.6963 1.5 10.7563 1.5Z" fill="white" fill-opacity="0.8" />
        </Icon>
        <span className="ml-2">Please visit our documentation before purchasing Kula</span>
      </div>
      <button onClick={props.onClose}>
        <Image h="24px" src={`/static-v2/vuesax-bulk-close-square@2x.svg`} />
      </button>
    </Flex>
  )
}
