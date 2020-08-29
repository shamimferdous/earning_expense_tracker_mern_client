import { useState, useEffect, useContext } from 'react';

//importing all components
import Layout from './Layout';
import Earning from './Earning';
import Expense from './Expense';

//importing context api
import { AuthContext } from '../context-api/AuthContext';


import axios from 'axios';

const App = (props) => {

  const [earning, setEarning] = useState({ date: "", amount: "", note: "" });
  const [expense, setExpense] = useState({ date: "", amount: "", note: "" });
  const [earnings, setEarnings] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const [count, setCount] = useState(0);

  const authContext = useContext(AuthContext);

  //the useEffect Hook... Getting Data from backend apis
  useEffect(() => {
    axios.get(`${process.env.serverApi}/api/v1/get-earnings`, { headers: { passcode: `${authContext.passcode}` } })
      .then(response => {
        setEarnings(response.data.earnings);
      });

    axios.get(`${process.env.serverApi}/api/v1/get-expenses`, { headers: { passcode: `${authContext.passcode}` } })
      .then(response => {
        setExpenses(response.data.expenses);
      });
  }, [count]);

  //defining earningOnChange
  const earningOnChange = e => {
    e.preventDefault();
    setEarning({ ...earning, [e.target.name]: e.target.value });
    console.log(earning);
  }

  //defining handleEarningOnSubmit
  const handleEarningOnSubmit = (e) => {
    e.preventDefault();

    axios.post(`${process.env.serverApi}/api/v1/post-earning`, earning,
      { headers: { 'passcode': `${authContext.passcode}` } }).then(response => {
        if (response.data.success === false) {
          console.log(`Internal Server Error`);
        } else {
          console.log(`Operation Successfull`);
          setCount(Math.random());
        }
      })

    console.log('handleEarningOnSubmit Triggered');
  }

  //defining earning counter function
  const earningCounter = () => {
    let totalEarning = 0;

    for (let i = 0; i < earnings.length; i++) {
      totalEarning = totalEarning + earnings[i].amount;
    }

    return totalEarning;
  }

  //defining onChangeExpense
  const onChangeExpense = e => {
    e.preventDefault();

    setExpense({ ...expense, [e.target.name]: e.target.value });
    console.log(expense);
  }

  //defining expenseOnSubmitHandler
  const expenseOnSubmitHandler = (e) => {
    e.preventDefault();

    axios.post(`${process.env.serverApi}/api/v1/post-expense`, expense,
      { headers: { 'passcode': `${authContext.passcode}` } }).then(response => {
        if (response.data.success === false) {
          console.log(`Internal Server Error`);
        } else {
          console.log(`Operation Successfull`);
          setCount(Math.random());
        }
      })

    console.log('handleExpenseOnSubmit Triggered');
  }


  //defining expense counter
  const expenseCounter = () => {
    let totalExpense = 0;

    for (let i = 0; i < expenses.length; i++) {
      totalExpense = totalExpense + expenses[i].amount;
    }

    return totalExpense;
  }


  //defining moneyOnPocket function
  const moneyOnPocket = () =>{
    return earningCounter() - expenseCounter();
  }


  return (
    <>
      <Layout>
        <div className="right">

          <label className>Earnings -  <span> {earningCounter()} </span> </label>

          {/* Earning Form */}
          <form className="main-form" onSubmit={handleEarningOnSubmit}>
            <input onChange={earningOnChange} style={{ padding: '.4rem' }} className="binary-input" type="date" name="date" placeholder="Enter Date" />
            <input onChange={earningOnChange} className="binary-input" type="number" name="amount" placeholder="Enter Amount" />
            <input onChange={earningOnChange} className="binary-input-2" type="text" name="note" placeholder="Enter Note" />
            <button className="binary-button" type="submit">Insert</button>
          </form>
          {/* Earning Table */}
          <div className="table-wrapper">
            <div className="table table-head">
              <span>Timestamp</span>
              <span>Date</span>
              <span>Note</span>
              <span>Amount</span>
            </div>

            {/* 🎈 Looping Here 🎈 */}
            {
              earnings.map(earning => {
                return <Earning key={earning._id} earning={earning} />
              })
            }



          </div>


        </div>
        <div className="left">

          <label>Expenses - {expenseCounter()}</label>
          {/* Earning Form */}
          <form className="main-form" onSubmit={expenseOnSubmitHandler}>
            <input onChange={onChangeExpense} style={{ padding: '.4rem' }} className="binary-input" type="date" name="date" placeholder="Enter Date" />
            <input onChange={onChangeExpense} className="binary-input" type="number" name="amount" placeholder="Enter Amount" />
            <input onChange={onChangeExpense} className="binary-input-2" type="text" name="note" placeholder="Enter Note" />
            <button className="binary-button" type="submit">Insert</button>
          </form>
          {/* Expense Table */}
          <div className="table-wrapper">
            <div className="table table-head">
              <span>Timestamp</span>
              <span>Date</span>
              <span>Note</span>
              <span>Amount</span>
            </div>

            {/* 🎈 Looping Here 🎈 */}
            {
              expenses.map(expense => {
                return <Expense key={expense._id} expense={expense} />
              })
            }


          </div>

          {/* Money on Pocket */}
          <div className="money-on-pocket">
            <span>{moneyOnPocket()} <svg className="the-coin" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="coins" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"></path></svg></span>
          </div>

        </div>
      </Layout>
    </>
  );

}

export default App;

