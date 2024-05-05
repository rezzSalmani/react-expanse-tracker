import React, { useContext } from "react";
import ExpanseTrackerContext from "../store/expanseTrackerContext";
const AddTransaction = () => {
  const { amount, title, AddTransaction, updateInputValue, clearInput } =
    useContext(ExpanseTrackerContext);
  function addTransactionData() {
    const data = {
      id: Math.floor(Math.random() * 100000000),
      text: title,
      amount: +amount,
    };
    AddTransaction(data);
    clearInput();
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id='form'>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            value={title}
            onChange={(e) => updateInputValue(e, "title")}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            id='amount'
            onChange={(e) => updateInputValue(e, "amount")}
            placeholder='Enter amount...'
          />
        </div>
        <button type='button' onClick={addTransactionData} className='btn'>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
