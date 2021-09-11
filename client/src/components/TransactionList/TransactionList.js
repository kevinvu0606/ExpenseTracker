import React, { useContext, useEffect } from 'react'
import { Transaction } from './Transaction'

import { GlobalContext } from '../../context/GlobalState'


export const TransactionList = () => {

  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(transactions)
  // [] empty array to prevent infinite loop 
  // the map: we are mapping through the list of transactions, and passing them through to the Transaction component which then lists them out.
  // transaction is being passed through as a prop
  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </>
  )
}
