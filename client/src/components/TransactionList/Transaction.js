import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { DeleteForever, LocalAtm } from '@material-ui/icons'
import useStyles from './styles'



export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const classes = useStyles()
  const sign = transaction.amount < 0 ? '-' : '+'

  // function addCommas(number) {
  //   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  // }

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit key={transaction._id}>
      <ListItem className={classes.listItem}>
        <ListItemAvatar>
          <Avatar className={transaction.amount < 0 ? classes.avatarExpense : classes.avatarIncome} >
            <LocalAtm />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={transaction.text} secondary={`${sign} $ ${Math.abs(transaction.amount)} - ${transaction.createdAt.split('T')[0]}`} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction._id)}>
            <DeleteForever />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Slide>
  )
}

