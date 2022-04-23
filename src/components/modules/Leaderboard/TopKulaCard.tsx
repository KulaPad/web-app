import { IStackingUser } from '../../../types/interfaces'
import { toShortAddress } from '../../../utils/account'
import { currency } from '../../../utils/Number'

interface TopKulaCardProps {
  data: IStackingUser
  title: string
}
export default function TopKulaCard(props: TopKulaCardProps) {
  const { data, title } = props

  return (
    <div className="flex justify-center flex-col border-2 border-slate-400 min-w-[15rem] p-2 bg-slate-50 rounded-md">
      <h3 className="text-center font-bold text-base">{title}</h3>
      <div className="mt-1">
        <div className="flex justify-between text-neutral-500 text-xs">
          <span>Display name</span>
          <span>{toShortAddress(data.address)}</span>
        </div>
        <div className="flex justify-between text-neutral-500 text-xs">
          <span>Locked</span>
          <span>265 days</span>
        </div>
        <div className="flex justify-center text-base mt-1">
          <span className="font-bold text-neutral-700">{currency(data.amount)} KULA</span>
        </div>
        <div className="flex justify-center text-sm">
          <span className="text-neutral-500">-$1000</span>
        </div>
      </div>
    </div>
  )
}
