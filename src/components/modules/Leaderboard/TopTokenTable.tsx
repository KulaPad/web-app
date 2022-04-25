import React from 'react'
import { IStakingUser } from '../../../types/interfaces'
import { toShortAddress } from '../../../utils/account'
import { currency } from '../../../utils/Number'

const TABLE_HEADERS = ['#', 'Display name', 'Days lock', 'xKula']

interface TopTokenTableProps {
  stakingUsers: IStakingUser[]
}
export default function TopTokenTable(props: TopTokenTableProps) {
  const { stakingUsers = [] } = props

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {TABLE_HEADERS.map((header, idx) => (
              <th key={idx} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stakingUsers.map((user, idx) => {
            return (
              <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{idx + 1}</td>
                <td className="px-6 py-4">{toShortAddress(user.address)}</td>
                <td className="px-6 py-4">{user.daysLock}</td>
                <td className="px-6 py-4">{currency(user.amount)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
