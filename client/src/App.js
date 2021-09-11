import { Header } from './components/Header/Header'
import { Balance } from './components/Balance/Balance'
import { IncomeExpenses } from './components/Income_Expense/IncomeExpenses'
import { TransactionList } from './components/TransactionList/TransactionList'
import { AddTransaction } from './components/AddTransaction/AddTransaction'
import { Graphs } from './components/Graphs/Graphs'
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <Graphs />
      </div>
    </GlobalProvider>
  );
}

export default App;
