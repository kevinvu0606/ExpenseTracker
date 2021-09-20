import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import { GlobalContext } from '../../context/GlobalState'

import useStyles from './styles';

export const GraphIncome = ({ title }) => {
  const classes = useStyles();
  const { transactions, getTransactions } = useContext(GlobalContext);

  let incomeObject = {}
  for (const property in transactions) {
    if (transactions[property]["amount"] > 0) {
      incomeObject[property] = transactions[property]
    }
  }

  let graphObject = {}

  for (const property in incomeObject) {
    if (!graphObject[incomeObject[property]['text']]) {
      graphObject[incomeObject[property]['text']] = incomeObject[property]['amount']
    } else {
      graphObject[incomeObject[property]['text']] += incomeObject[property]['amount']
    }
  }
  // let itemCount = Object.keys(graphObject).length

  let labelIncome = []
  for (const property in graphObject) {
    // labelIncome.push(incomeObject[property]['text'])
    labelIncome.push(property)
  }

  let incomeData = []
  for (const property in graphObject) {
    incomeData.push(graphObject[property])
  }


  let totalIncome = 0
  for (var i = 0; i < incomeData.length; i++) {
    totalIncome = totalIncome + Math.abs(incomeData[i])
  }


  const data = {
    labels: labelIncome,
    datasets: [
      {
        label: 'Amount',
        data: incomeData,
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
        <Typography variant='h5'>${Math.abs(totalIncome)}</Typography>
        <Doughnut data={data} />
      </CardContent>
    </Card>
  )
}