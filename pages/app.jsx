import Layout from '../components/Layout'
import { useState } from 'react';

const app = (props) => {

  const [earning, setEarning] = useState({date: "", amount: "", note: ""});
  const [expense, setExpense] = useState({date: "", amount: "", note: ""});

  //defining earningOnChange
  const earningOnChange = e =>{
    e.preventDefault();
    setEarning({...earning, [e.target.name] : e.target.value});
    console.log(earning);
  }

  return (
    <>
      <Layout>
        <div className="right">

          <label className>Earnings</label>

          {/* Earning Form */}
          <form className="main-form" action="">
          <input onChange={earningOnChange} style={{padding: '.4rem'}} className="binary-input" type="date" name="date" placeholder="Enter Date" />
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

          <div className="table">
            <span>22/4/2001</span>
            <span>23/3/2003</span>
            <span>Welcome Amigo</span>
            <span>56</span>
          </div>
          </div>
          

        </div>
        <div className="left">

          <label>Expenses</label>
          {/* Earning Form */}
          <form className="main-form" action="">
            <input style={{padding: '.4rem'}} className="binary-input" type="date" name="date" placeholder="Enter Date" />
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