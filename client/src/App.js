import { Header } from './components/Header/Header'
import { Balance } from './components/Balance/Balance'
import { IncomeExpenses } from './components/Income_Expense/IncomeExpenses'
import { TransactionList } from './components/TransactionList/TransactionList'
import { AddTransaction } from './components/AddTransaction/AddTransaction'
import { GraphIncome } from './components/Graphs/GraphIncome'
import { GraphExpense } from './components/Graphs/GraphExpense'
import { GlobalProvider } from './context/GlobalState'
import { Grid } from '@material-ui/core';
import useStyles from './styles';

function App() {
  const classes = useStyles()

  return (
    <GlobalProvider >
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={4} >
          <GraphIncome title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} >
          <Header />
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} >
          <GraphExpense title="Expenses" />
        </Grid>
      </Grid>
    </GlobalProvider>
  );
}

export default App;
