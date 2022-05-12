import { useEffect } from 'react'
import { Button, HStack, Text, Image } from '@chakra-ui/react'

import getConfig from '../configs/config'
import KulaFtStore from './Auth/KulaFtStore'
import { currency } from '../utils/Number'

const nearConfig = getConfig(process.env.NODE_ENV || 'testnet')

const ConnectWallet = (props) => {
  const handleClickSignIn = () => {
    window.walletConnection.requestSignIn(nearConfig.ftTokenContractName, 'KULA Lauchpad')
  }

  const handleClickSignOut = () => {
    window.walletConnection.signOut()
    window.location.replace(window.location.origin + window.location.pathname)
  }

  const { balance: kula_balance } = KulaFtStore
  useEffect(() => {
    KulaFtStore.fetchFtBalance(window.accountId)
  }, [window.accountId])

  if (window.accountId)
    return (
      <HStack borderColor="var(--candy-3)" className="border rounded-[8px] overflow-hidden">
        <Text className="px-3 flex flex-row items-center" color="var(--neutral-light-1)">
          <Image src={`/static-v2/icon-square.svg`} />
          <b className="ml-2 text-sm">{currency(kula_balance)} KULA</b>
        </Text>
        <Button
          onClick={handleClickSignOut}
          className="!rounded-l-none !rounded-r-none"
          bg="var(--candy-3)"
          color="var(--white)"
          colorScheme="pink"
        >
          {window.accountId} (sign out)
        </Button>
      </HStack>
    )

  return (
    <Button onClick={handleClickSignIn} colorScheme="pink" size="sm" rounded="md">
      Connect wallet
    </Button>
  )
}

export default ConnectWallet
