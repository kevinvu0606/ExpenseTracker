import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);
  const currentBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <>
      <h4> Your Current Balance</h4>
      <h1>{addCommas(currentBalance)}</h1>
    </>
  )
}