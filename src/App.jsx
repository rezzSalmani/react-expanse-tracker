import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpanse from "./components/IncomeExpanse";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { ExpanseTrackerProvider } from "./store/expanseTrackerContext";
function App() {
  return (
    <ExpanseTrackerProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpanse />
        <TransactionList />
        <AddTransaction />
      </div>
    </ExpanseTrackerProvider>
  );
}

export default App;
