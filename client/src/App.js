import { Header } from './components/Header/Header'
import { Balance } from './components/Balance/Balance'
import { IncomeExpenses } from './components/Income_Expense/IncomeExpenses'
import { TransactionList } from './components/TransactionList/TransactionList'
import { AddTransaction } from './components/AddTransaction/AddTransaction'
import { GraphIncome } from './components/Graphs/GraphIncome'
import { GraphExpense } from './components/Graphs/GraphExpense'
import { GraphIncomeExpense } from './components/Graphs/GraphIncomeExpense'
import { BarGraph } from './components/Graphs/BarGraph'
import { GlobalProvider } from './context/GlobalState'
import { Grid, Card, Divider, CardContent, Paper } from '@material-ui/core';
import useStyles from './styles';

import './App.css';

function App() {
  const classes = useStyles()

  return (
    <GlobalProvider >
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '80vh' }}>
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
        <Grid className={classes.LineGraph} item xs={11} sm={5} style={{ height: '50vh' }} >
          <GraphIncomeExpense />
        </Grid>
        <Grid item xs={11} sm={5} style={{ height: '50vh' }}>
          <BarGraph />
        </Grid>
      </Grid>




      {/* <Grid className={classes.grid} container spacing={2} alignItems="center" justifyContent="center" style={{ height: '120vh' }} direction='row' columns={2} wrap='nowrap'>


        <Grid container direction='column' xs={6} sm={6}>
          <Grid Item>
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
        </Grid>




        <Grid container direction="row" xs={6} sm={6} justifyContent='center' alignItems='center' wrap='wrap' >
          <Grid item xs={9} sm={9} spacing={2} >
            <Grid container direction="column">
              <Grid item><GraphIncomeExpense /></Grid>
              <Grid item><BarGraph /></Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} sm={3} spacing={2} >
            <Grid container direction="column">
              <Grid item><GraphIncome title="Income" /></Grid>
              <Grid item><GraphExpense title="Expenses" /></Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid> */}


    </GlobalProvider >
  );
}

export default App;
