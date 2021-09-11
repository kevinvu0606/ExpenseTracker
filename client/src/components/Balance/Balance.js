import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);
  const currentBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // function addCommas(number) {
  //   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  // }

  return (
    <>
      <CardContent>
        <Typography align="center" variant="h6">Total Balance ${currentBalance}</Typography>
      </CardContent>
    </>
  )
}