import { Icon } from '@chakra-ui/icons'
import { Heading, Image, Stack, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React from 'react'

const neutralLight0 = 'var(--neutral-light-0)'
const teal = 'var(--teal)'

const stakedKula = '200';
const apr = '12.45%';
const monthlyReward = '2';

type Props = {
}
export default observer(function StakingStatsV2(props: Props) {
  return (
    <Stack spacing={{ base: 4, md: 4 }}>
      <Stack
        p={{ base: 8 }}
        rounded={"xl"}
        bg={`linear-gradient(180deg, #2D225E 0%, rgba(45, 34, 94, 0) 100%)`}
      >
        <Stack
          direction='row' justify='center' align='center'>
          <Heading
            color={neutralLight0}
            fontSize={{ base: "xl" }}
          >
            Staking Reward
          </Heading>

          <Icon
            cursor="pointer"
            mr={'10px'}
            viewBox='0 0 24 24' width="1.5rem" height="1.5rem">
            <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12.75 17.0625C12.75 17.1656 12.6656 17.25 12.5625 17.25H11.4375C11.3344 17.25 11.25 17.1656 11.25 17.0625V10.6875C11.25 10.5844 11.3344 10.5 11.4375 10.5H12.5625C12.6656 10.5 12.75 10.5844 12.75 10.6875V17.0625ZM12 9C11.7056 8.99399 11.4253 8.87282 11.2192 8.6625C11.0132 8.45218 10.8977 8.16945 10.8977 7.875C10.8977 7.58055 11.0132 7.29782 11.2192 7.0875C11.4253 6.87718 11.7056 6.75601 12 6.75C12.2944 6.75601 12.5747 6.87718 12.7808 7.0875C12.9868 7.29782 13.1023 7.58055 13.1023 7.875C13.1023 8.16945 12.9868 8.45218 12.7808 8.6625C12.5747 8.87282 12.2944 8.99399 12 9Z" fill="#62C6E5" />
          </Icon>
        </Stack>
        <div className="flex justify-between pt-4">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Staked KULA
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            {stakedKula} KULA
          </Text>
        </div>
        <div className="flex justify-between pt-1">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            APR
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            {apr}
          </Text>
        </div>
        <div className="flex justify-between pt-1">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Monthly Reward
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            {monthlyReward} KULA
          </Text>
        </div>
      </Stack>

      <Stack
        p={{ base: 8 }}
        rounded={"xl"}
        bg={`linear-gradient(180deg, #2D225E 0%, rgba(45, 34, 94, 0) 100%)`}
      >
        <Stack
          direction='row' justify='center' align='center'>
          <Heading
            color={neutralLight0}
            fontSize={{ base: "xl" }}
          >
            xKULA Point
          </Heading>

          <Icon
            cursor="pointer"
            mr={'10px'}
            viewBox='0 0 24 24' width="1.5rem" height="1.5rem">
            <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12.75 17.0625C12.75 17.1656 12.6656 17.25 12.5625 17.25H11.4375C11.3344 17.25 11.25 17.1656 11.25 17.0625V10.6875C11.25 10.5844 11.3344 10.5 11.4375 10.5H12.5625C12.6656 10.5 12.75 10.5844 12.75 10.6875V17.0625ZM12 9C11.7056 8.99399 11.4253 8.87282 11.2192 8.6625C11.0132 8.45218 10.8977 8.16945 10.8977 7.875C10.8977 7.58055 11.0132 7.29782 11.2192 7.0875C11.4253 6.87718 11.7056 6.75601 12 6.75C12.2944 6.75601 12.5747 6.87718 12.7808 7.0875C12.9868 7.29782 13.1023 7.58055 13.1023 7.875C13.1023 8.16945 12.9868 8.45218 12.7808 8.6625C12.5747 8.87282 12.2944 8.99399 12 9Z" fill="#62C6E5" />
          </Icon>
        </Stack>

        <Image
          alignSelf="center"
          pt={2} pb={2} src={'/static-v2/x-kula-point.png'} className="w-[72px]" />

        <Heading
          textAlign="center"
          color={neutralLight0}
          fontSize={{ base: "xl" }}
        >
          201.23 xKULA
        </Heading>

        <Text
          textAlign="center"
          color={teal}
          as="span" className="text-sm font-bold">
          200 KULA would be locked in staking pool for 180 days.
        </Text>

        <div className="flex justify-between pt-4">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Staking Tier
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            Tier 1
          </Text>
        </div>
        <div className="flex justify-between pt-1">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Tier Tickets
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            1 ticket
          </Text>
        </div>
        <div className="flex justify-between pt-1">
          <Text as="span" color="var(--neutral-light-2)" className="text-md font-bold">
            Total tickets
          </Text>
          <Text as="span" color="var(--neutral-light-0)" className="text-md font-bold">
            2 tickets
          </Text>
        </div>
      </Stack>
    </Stack>
  )
})
