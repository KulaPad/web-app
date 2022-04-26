import { Button, Image } from '@chakra-ui/react'
import moment from 'moment'
import { useMemo } from 'react'
import { percentformatter, usdFormatter } from '../../utils/formatter'

const TOKEN_NAME = 'KULA'

const dumpyToken = {
  total: 300,
  stacked: 200,
  startTime: 1630482070000,
  dayLocked: 400,
}
interface StakingInfoCardProps {}
export default function StakingInfoCard(props: StakingInfoCardProps) {
  const {} = props

  console.log(moment().subtract('days', 236).unix())

  const totalToken = useMemo(() => {
    return dumpyToken.total
  }, [])

  const usdPrice = useMemo(() => {
    return 1000
  }, [])

  const availableToken = useMemo(() => {
    return dumpyToken.total - dumpyToken.stacked
  }, [])

  const stackedToken = useMemo(() => {
    return dumpyToken.stacked
  }, [])

  const unlockTime = useMemo(() => {
    var endDate = moment(dumpyToken.startTime).add('days', dumpyToken.dayLocked)
    return endDate.format('MM/DD/YYYY')
  }, [])

  const daysLeft = useMemo(() => {
    var eventdate = moment(dumpyToken.startTime).add('days', dumpyToken.dayLocked)
    var todaysdate = moment()
    return eventdate.diff(todaysdate, 'days')
  }, [])

  const rewards = useMemo(() => {
    return 10.42
  }, [])

  const estimateAPY = useMemo(() => {
    return 10
  }, [])

  const estimateKula = useMemo(() => {
    return 0.02
  }, [])

  const handleStack = () => {}
  const handleUnstack = () => {}
  const handleHarvest = () => {}

  return (
    <div className="inline-flex justify-center flex-col border-2 border-slate-400 min-w-[15rem] p-2 py-4 bg-slate-50 rounded-md">
      <h3 className="text-center font-bold text-base">Staked</h3>
      <div className="flex items-center flex-col mt-3">
        <Image
          loading="lazy"
          src={'/mstatic/icons/BTC_Logo.svg'}
          h="50px"
          w="50px"
          borderRadius="50%"
        />
        <span className="text-neutral-700 text-base">
          {totalToken} {TOKEN_NAME}
        </span>
        <span className="text-xs text-neutral-500">~ {usdFormatter.format(usdPrice)}</span>
      </div>
      <div className="mt-3">
        <div className="flex justify-between text-neutral-500 text-xs">
          <span>Available Unstake</span>
          <span>
            {availableToken} {TOKEN_NAME}
          </span>
        </div>
        <div className="flex justify-between text-neutral-500 text-xs">
          <span>Locked amount</span>
          <span>
            {stackedToken} {TOKEN_NAME}
          </span>
        </div>
        <div className="flex justify-between text-neutral-500 text-xs">
          <span>Unlock time</span>
          <span>
            {unlockTime} ({daysLeft} days left)
          </span>
        </div>
        <hr className="mt-3" />
        <div className="flex justify-between text-neutral-500 text-xs">
          <span>Rewards</span>
          <span>
            {rewards} {TOKEN_NAME}
          </span>
        </div>
        <div className="flex justify-between text-neutral-500 text-xs">
          <span>Estimate APY</span>
          <span>{percentformatter.format(estimateAPY)}</span>
        </div>

        <div className="flex justify-between text-neutral-500 text-xs">
          <span>Estimate {TOKEN_NAME}/day</span>
          <span>
            {estimateKula} {TOKEN_NAME}
          </span>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between text-neutral-500 text-xs">
          <Button colorScheme="blue" variant="outline" w="49%" onClick={handleStack}>
            Stake
          </Button>
          <Button colorScheme="blue" variant="outline" w="49%" onClick={handleUnstack}>
            Unstake
          </Button>
        </div>
        <div className="flex mt-1 text-neutral-500 text-xs">
          <Button colorScheme="blue" variant="outline" w="100%" onClick={handleHarvest}>
            Harvest
          </Button>
        </div>
      </div>
    </div>
  )
}
