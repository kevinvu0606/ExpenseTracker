import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Line } from 'react-chartjs-2';
import { GlobalContext } from '../../context/GlobalState'

import useStyles from './styles';

export const GraphIncomeExpense = ({ title }) => {
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
    if (!graphObject[incomeObject[property]['createdAt']]) {
      graphObject[incomeObject[property]['createdAt']] = incomeObject[property]['amount']
    } else {
      graphObject[incomeObject[property]['createdAt']] += incomeObject[property]['amount']
    }
  }
  // let itemCount = Object.keys(graphObject).length
  // transaction.createdAt.split('T')[0]
  let labelIncome = []
  for (const property in graphObject) {
    // labelIncome.push(incomeObject[property]['text'])
    labelIncome.push(property)
  }

  let incomeData = []
  for (const property in graphObject) {
    incomeData.push(graphObject[property])
  }

  for (let i = 0; i < labelIncome.length; i++) {
    labelIncome[i] = labelIncome[i].split('T')[0]
  }


  let totalIncome = 0
  for (var i = 0; i < incomeData.length; i++) {
    totalIncome = totalIncome + Math.abs(incomeData[i])
  }

  let expenseObject = {}
  for (const property in transactions) {
    if (transactions[property]["amount"] < 0) {
      expenseObject[property] = transactions[property]
    }
  }

  let graphObjectExpense = {}

  for (const property in expenseObject) {
    if (!graphObjectExpense[expenseObject[property]['text']]) {
      graphObjectExpense[expenseObject[property]['text']] = expenseObject[property]['amount']
    } else {
      graphObjectExpense[expenseObject[property]['text']] += expenseObject[property]['amount']
    }
  }

  let labelExpense = []
  for (const property in graphObjectExpense) {
    labelExpense.push(property)
  }

  let expenseData = []
  for (const property in graphObjectExpense) {
    expenseData.push(Math.abs(graphObjectExpense[property]))
  }

  let totalExpense = 0
  for (var i = 0; i < expenseData.length; i++) {
    totalExpense = totalExpense + expenseData[i]
  }

  const data = {
    labels: labelIncome,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 0.5)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Expense',
        data: expenseData,
        backgroundColor: [
          'rgba(255, 0, 0, 0.5)'
        ],
        borderColor: [
          'rgba(255, 0, 0, 0.5)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card className={classes.incomeExpense}>
      <CardHeader title={title} align="center" />
      <CardContent>
        <Line

          data={data}
          options={{
            plugins: {
              legend: {
                display: true,
              },
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                scaleLabel: {
                  display: true,
                }
              }]
            }
          }} />
        {console.log(graphObject)}
      </CardContent>
    </Card>
  )
}