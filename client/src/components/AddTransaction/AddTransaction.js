import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Typography, TextField, InputAdornment, MenuItem } from '@material-ui/core'
import useStyles from './AddTransactionStyle';
import { MonetizationOn } from '@material-ui/icons'


export const AddTransaction = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState('')
  const { addTransaction } = useContext(GlobalContext)
  const classes = useStyles()


  const categories = [
    { type: 'Business' },
    { type: 'Investments' },
    { type: 'Extra income' },
    { type: 'Deposits' },
    { type: 'Lottery' },
    { type: 'Gifts' },
    { type: 'Salary' },
    { type: 'Savings' },
    { type: 'Rental income' },
    { type: 'Bills' },
    { type: 'Car' },
    { type: 'Clothes' },
    { type: 'Travel' },
    { type: 'Food' },
    { type: 'Shopping' },
    { type: 'House' },
    { type: 'Entertainment' },
    { type: 'Phone' },
    { type: 'Pets' },
    { type: 'Other' },
  ]



  function handleChangeNumbers(event) {
    const onlyNums = event.target.value;
    setAmount(onlyNums)
  }


  const onSubmit = event => {
    event.preventDefault();
    // can use uuid for random id 
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: parseFloat(amount)
    }

    addTransaction(newTransaction)
    setText("")
    setAmount("")
  }

  return (
    <div className="addTransaction">
      <div>
        <Typography align="center" variant="h5"> Add a Transaction</Typography>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            {/* form for if i want custom inputs */}
            {/* <Typography align="center" variant="h6">Enter Details</Typography>
            <TextField
              value={text}
              onChange={(event) => setText(event.target.value)}
              color="secondary"
              defaultValue='Details'
              margin='normal'
              required='true'
              size='small'
              variant='filled'
              fullWidth='true'
              className={classes.textField}
              inputProps={{
                style: { textAlign: 'center', fontSize: 20 },
              }
              }
            /> */}

            <Typography align="center" variant="h6">Enter Details</Typography>
            <TextField
              value={text}
              onChange={(event) => setText(event.target.value)}
              color="secondary"
              select
              margin='normal'
              required='true'
              size='small'
              variant='filled'
              fullWidth='true'
              className={classes.textField}
              inputProps={{
                style: { textAlign: 'center', fontSize: 30 },
              }
              }
            >
              {categories.map((option) => (
                <MenuItem
                  key={option.type}
                  value={option.type}
                  className={classes.listItemText}>
                  {option.type}
                </MenuItem>))}
            </TextField>
          </div>






          <div className="form-control">
            <Typography align="center" variant="h6">Enter Amount: </Typography>

            <TextField
              multiline={false}
              autofocus
              type='number'
              placeholder='0.00'
              value={amount}
              onChange={handleChangeNumbers}
              color='secondary'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" classes={{ positionStart: classes.centerAdornment }}>
                    <MonetizationOn fontSize='large' />
                  </InputAdornment>)
              }}
              margin='normal'
              required='true'
              size='small'
              variant='filled'
              fullWidth='true'
              className={classes.textField}
              inputProps={{
                style: {
                  fontSize: 25,
                }
              }}
              helperText={
                <Typography
                  variant="caption"
                  className={classes.centerHelper}
                  display="block"
                >
                  Positive for Income |  Negative for Expenses
                </Typography>

              }

            />
          </div>
          <button className="btn">Add Transaction</button>
        </form>
      </div>
    </div>
  )
}
