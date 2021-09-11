import React, { useContext, useEffect } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../../context/GlobalState'
import { List as MUIList, Typography } from '@material-ui/core';
import useStyles from './styles'


export const TransactionList = () => {

  const { transactions, getTransactions } = useContext(GlobalContext);
  const classes = useStyles();

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
      <Typography align="center" variant="h5">Transaction History</Typography>
      <MUIList dense={false}>
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </MUIList>
    </>
  )
}
