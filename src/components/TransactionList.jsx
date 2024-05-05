import React, { useContext } from "react";
import ExpanseTrackerContext from "../store/expanseTrackerContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(ExpanseTrackerContext);
  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions &&
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
