import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CardContent, Typography, Divider } from '@material-ui/core';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);
  const currentBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const sign = currentBalance < 0 ? '-' : '+'
  // function addCommas(number) {
  //   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  // }
  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <>
      <CardContent>
        <Typography align="center" variant="h6"> Total Balance </Typography>
        <Typography align="center" variant="h6" className={currentBalance < 0 ? "money minus" : 'money plus'}>
          {sign} $ {addCommas(Math.abs(currentBalance))}
        </Typography>
      </CardContent>
      {console.log(currentBalance)}
    </>
  )
}