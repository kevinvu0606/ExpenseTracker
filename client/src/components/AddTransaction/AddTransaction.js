import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Typography, TextField, InputAdornment, Input } from '@material-ui/core'
import useStyles from './AddTransactionStyle';
import { MonetizationOn } from '@material-ui/icons'


export const AddTransaction = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState('')
  const { addTransaction } = useContext(GlobalContext)
  const classes = useStyles()


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
            <Typography align="center" variant="h6">Enter Details</Typography>
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

            />
          </div>
          <div className="form-control">
            <Typography align="center" variant="h6">Enter Amount: </Typography>

            <TextField
              multiline={false}
              autofocus
              placeholder='0.00'
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
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
              helperText="Postiive for income, Negative for expenses"

            />
          </div>
          <button className="btn">Add Transaction</button>
        </form>
      </div>
    </div>
  )
}
