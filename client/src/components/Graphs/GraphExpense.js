import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import { GlobalContext } from '../../context/GlobalState'

import useStyles from './styles';

export const GraphExpense = ({ title }) => {
  const classes = useStyles();
  const { transactions, getTransactions } = useContext(GlobalContext);

  let expenseObject = {}
  for (const property in transactions) {
    if (transactions[property]["amount"] < 0) {
      expenseObject[property] = transactions[property]
    }
  }

  let graphObject = {}

  for (const property in expenseObject) {
    if (!graphObject[expenseObject[property]['text']]) {
      graphObject[expenseObject[property]['text']] = expenseObject[property]['amount']
    } else {
      graphObject[expenseObject[property]['text']] += expenseObject[property]['amount']
    }
  }






  let labelExpense = []
  for (const property in graphObject) {
    labelExpense.push(property)
  }

  let expenseData = []
  for (const property in graphObject) {
    expenseData.push(graphObject[property])
  }

  let totalExpense = 0
  for (var i = 0; i < expenseData.length; i++) {
    totalExpense = totalExpense + expenseData[i]
  }


  const data = {
    labels: labelExpense,
    datasets: [
      {
        label: 'Amount',
        data: expenseData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} align="center" />
      <CardContent>
        <Typography variant='h5'> $ {Math.abs(totalExpense)}</Typography>
        <Doughnut data={data} />
      </CardContent>
    </Card>
  )
}