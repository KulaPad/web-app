import { Box, Text, Image } from '@chakra-ui/react'

export default function IdoContent() {
  return (
    <Box className="flex flex-col md:flex-row">
      <Box className="w-full md:w-3/12 md:pr-7">
        <Box
          borderColor="var(--neutral-dark-4)"
          className="border w-full rounded-[24px] min-h-[25px] p-6"
        >
          <ul className="flex flex-col gap-y-2">
            <li className="inline-flex">
              <Image src="/static-v2/icon-about.svg" />
              <Text className="ml-1 text-xl font-bold" color="var(--neutral-dark-5)">
                About
              </Text>
            </li>
            <li className="inline-flex">
              <Image src="/static-v2/icon-features.svg" />
              <Text className="ml-1 text-xl font-bold" color="var(--neutral-dark-5)">
                Features
              </Text>
            </li>
            <li className="inline-flex">
              <Image src="/static-v2/icon-roadmap.svg" />
              <Text className="ml-1 text-xl font-bold" color="var(--neutral-dark-5)">
                Roadmap
              </Text>
            </li>
            <li className="inline-flex">
              <Image src="/static-v2/icon-tokenomic.svg" />
              <Text className="ml-1 text-xl font-bold" color="var(--neutral-dark-5)">
                Tokenomic
              </Text>
            </li>
            <li className="inline-flex">
              <Image src="/static-v2/icon-team.svg" />
              <Text className="ml-1 text-xl font-bold" color="var(--neutral-dark-5)">
                Team
              </Text>
            </li>
          </ul>
        </Box>
      </Box>
      <Box className="flex-1 rounded-[24px] p-8 mt-4 md:mt-0" bg="var(--neutral-dark-0)">
        <Text className="text-base" color="var(--neutral-light-2)">
          Eizper Chain gameplay contains synergy between adventure and arena battle. In adventure
          part players roam the fast world of Eizper guided enticing epic story full of twist and
          turn. While in arena battle part, players may compete against each other in battle event
          in hope to get rewards and recognition. NFTs are a non-fungible token that is a unique and
          non-interchangeable unit of data stored on a blockchain. NFTs can be associated with
          reproducible digital files. NFTs use a digital ledger to provide a public certificate of
          authenticity or proof of ownership, but do not restrict the sharing or copying of the
          underlying digital files.A
        </Text>
        <Image src="/static-v2/ido-banner-1.png" />
        <Text className="text-base" color="var(--neutral-light-2)">
          Eizper Chain gameplay contains synergy between adventure and arena battle. In adventure
          part players roam the fast world of Eizper guided enticing epic story full of twist and
          turn. While in arena battle part, players may compete against each other in battle event
          in hope to get rewards and recognition. NFTs are a non-fungible token that is a unique and
          non-interchangeable unit of data stored on a blockchain. NFTs can be associated with
          reproducible digital files. NFTs use a digital ledger to provide a public certificate of
          authenticity or proof of ownership, but do not restrict the sharing or copying of the
          underlying digital files.A
        </Text>
        <Text className="text-base" color="var(--neutral-light-2)">
          Eizper Chain gameplay contains synergy between adventure and arena battle. In adventure
          part players roam the fast world of Eizper guided enticing epic story full of twist and
          turn. While in arena battle part, players may compete against each other in battle event
          in hope to get rewards and recognition. NFTs are a non-fungible token that is a unique and
          non-interchangeable unit of data stored on a blockchain. NFTs can be associated with
          reproducible digital files. NFTs use a digital ledger to provide a public certificate of
          authenticity or proof of ownership, but do not restrict the sharing or copying of the
          underlying digital files.A
        </Text>
      </Box>
    </Box>
  )
}
