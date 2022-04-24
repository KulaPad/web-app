import { useMemo } from 'react'
import SimpleLayout from '../components/Layout/SimpleLayout'
import TopTokenTable from '../components/modules/Leaderboard/TopTokenTable'
import TopTokenCard from '../components/modules/Leaderboard/TopTokenCard'

const dumpyStakingUsers = [
  {
    address: '0x2261C900869153399B7fb9776c8904BebfcB1225',
    daysLock: 112,
    amount: 1000300,
  },
  {
    address: '0x2261C900869153399B7fb9776c8904BebfcB1225',
    daysLock: 234,
    amount: 1002000,
  },
  {
    address: '0x2215e8a44D9615568B464f144510a0CE47620efF',
    daysLock: 55,
    amount: 1005000,
  },
  {
    address: '0x227Ce87dA32240EE11a1a0086c19cc70B71334F3',
    daysLock: 33,
    amount: 1030000,
  },
  {
    address: '0x2275bB277830745ca0DC3c73b706c89B5E65b067',
    daysLock: 222,
    amount: 1000010,
  },
  {
    address: '0x227f934100aFc2b90c776e20ed1684A5c309A3Ba',
    daysLock: 234,
    amount: 1000001,
  },
]

interface LeaderBoardProps {}
export default function LeaderBoard(props: LeaderBoardProps) {
  const stackingUsers = dumpyStakingUsers

  const topStaking = useMemo(() => {
    return stackingUsers.sort((user) => user.amount).slice(0, 3)
  }, [stackingUsers])

  const [top1, top2, top3] = topStaking
  return (
    <SimpleLayout>
      <div className="flex justify-center bg-slate-300 w-full relative min-h-[20rem] py-2">
        {/* <div><img src="https://picsum.photos/1300/500" /></div> */}
        <div className="md:absolute md:-bottom-4 md:left-1/2 md:-translate-x-1/2">
          <div className="flex flex-col md:flex-row items-center md:align-baseline">
            <div className="flex md:items-end">
              {!!top2 && <TopTokenCard title="2nd" data={top2} />}
            </div>
            <div className="ml-8 py-2 md:mx-0  md:pb-8 md:px-2">
              {!!top1 && <TopTokenCard title="1st" data={top1} />}
            </div>
            <div className="flex md:items-end">
              {!!top3 && <TopTokenCard title="3st" data={top3} />}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 px-2 md:px-0">
        <TopTokenTable stackingUsers={dumpyStakingUsers} />
      </div>
    </SimpleLayout>
  )
}
