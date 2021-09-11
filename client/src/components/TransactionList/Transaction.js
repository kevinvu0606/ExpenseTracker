import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+'

  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${addCommas(Math.abs(transaction.amount))}</span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn">x</button>
    </li>
  )
}
