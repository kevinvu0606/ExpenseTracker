import { Header } from './components/Header/Header'
import { Balance } from './components/Balance/Balance'
import { IncomeExpenses } from './components/Income_Expense/IncomeExpenses'
import { TransactionList } from './components/TransactionList/TransactionList'
import { AddTransaction } from './components/AddTransaction/AddTransaction'
import { GraphIncome } from './components/Graphs/GraphIncome'
import { GraphExpense } from './components/Graphs/GraphExpense'
import { GlobalProvider } from './context/GlobalState'
import { Grid, Card, Divider, CardHeader, CardContent } from '@material-ui/core';
import useStyles from './styles';

import './App.css';

function App() {
  const classes = useStyles()

  return (
    <GlobalProvider >
      <Grid className={classes.grid} container spacing={9} alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={11} sm={3} >
          <GraphIncome title="Income" />
        </Grid>
        <Grid item xs={11} sm={4} >
          <Card>
            <Header />
            <CardContent>
              <div className="container">
                <Balance />
                <Divider classes={{ root: classes.divider }} variant='middle' />
                <IncomeExpenses />
                <Divider classes={{ root: classes.divider }} variant='middle' />
                <TransactionList />
                <Divider classes={{ root: classes.divider }} variant='middle' />
                <AddTransaction />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={11} sm={3} >
          <GraphExpense title="Expenses" />
        </Grid>
      </Grid>
    </GlobalProvider>
  );
}

export default App;
