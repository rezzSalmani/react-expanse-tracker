import React, { createContext, useReducer, useState } from "react";

const ExpanseTrackerContext = createContext({
  amount: "",
  title: "",
  transactions: [],
  expanseReducer: () => {},
  deleteTransaction: () => {},
  AddTransaction: () => {},
  clearInput: () => {},
});

const expanseReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      const identifier = action.identifier;
      const updatedItems = {
        ...state,
        [identifier]: action.event.target.value,
      };
      return { ...state, ...updatedItems };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.id
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.data],
      };
    case "CLEAR_INPUT":
      return { ...state, amount: "", title: "" };
    default:
      return state;
  }
};
export const ExpanseTrackerProvider = ({ children }) => {
  const [expanseData, dispatchExpanse] = useReducer(expanseReducer, {
    amount: "",
    title: "",
    transactions: [
      { id: 1, text: "Flower", amount: -20 },
      { id: 2, text: "Salary", amount: 300 },
      { id: 3, text: "Book", amount: -10 },
      { id: 4, text: "Camera", amount: 150 },
    ],
  });

  function updateInputValue(event, identifier) {
    dispatchExpanse({ type: "UPDATE_INPUT", event, identifier });
  }
  function AddTransaction(data) {
    dispatchExpanse({ type: "ADD_TRANSACTION", data });
  }
  function deleteTransaction(id) {
    dispatchExpanse({ type: "DELETE_TRANSACTION", id });
  }
  function clearInput() {
    dispatchExpanse({ type: "CLEAR_INPUT" });
  }
  const expanseValue = {
    amount: expanseData.amount,
    title: expanseData.title,
    transactions: expanseData.transactions,
    updateInputValue,
    deleteTransaction,
    AddTransaction,
    clearInput,
  };

  return (
    <ExpanseTrackerContext.Provider value={expanseValue}>
      {children}
    </ExpanseTrackerContext.Provider>
  );
};
export default ExpanseTrackerContext;
