import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expenses = (
    amounts
      .filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);

  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">$ {addCommas(income)}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">$ {addCommas(expenses)}</p>
      </div>
    </div >
  )
}
