import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'


export const AddTransaction = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = event => {
    event.preventDefault();
    // can useuuid for random id 
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: parseInt(amount)
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h3> Add a transaction </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Details" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /> (negative = expense , positive = income)</label>
          <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Details" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  )
}
