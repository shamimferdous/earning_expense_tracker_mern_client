import { useState, useEffect } from 'react';

//importing all components
import Layout from '../components/Layout';
import Earning from '../components/Earning';


import axios from 'axios';

const app = (props) => {

  const [earning, setEarning] = useState({ date: "", amount: "", note: "" });
  const [expense, setExpense] = useState({ date: "", amount: "", note: "" });
  const [earnings, setEarnings] = useState([]);

  //the useEffect Hook... Getting Data from backend apis
  useEffect(() => {
    axios.get(`${process.env.serverApi}/api/v1/get-earnings`, { headers: { passcode: `${process.env.passcode}` } })
      .then(response => {
        console.log(response.data.earnings);
        setEarnings(response.data.earnings);
      })
  }, [earning]);

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
      { headers: { 'passcode': `${process.env.passcode}` } }).then(response => {
        if (response.data.success === false) {
          console.log(`Internal Server Error`);
        } else {
          console.log(`Operation Successfull`);
        }
      })

    console.log('handleEarningOnSubmit Triggered');
  }

  return (
    <>
      <Layout>
        <div className="right">

          <label className>Earnings</label>

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
              earnings.map(earning=>{
                return <Earning key={earning._id} earning={earning} />
              })
            }

            

          </div>


        </div>
        <div className="left">

          <label>Expenses</label>
          {/* Earning Form */}
          <form className="main-form" action="">
            <input style={{ padding: '.4rem' }} className="binary-input" type="date" name="date" placeholder="Enter Date" />
            <input className="binary-input" type="number" name="amount" placeholder="Enter Amount" />
            <input className="binary-input-2" type="number" name="note" placeholder="Enter Note" />
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

            <div className="table">
              <span>22/4/2001</span>
              <span>23/3/2003</span>
              <span>Welcome Amigo</span>
              <span>56</span>
            </div>
          </div>

        </div>
      </Layout>
    </>
  );

}

export default app;