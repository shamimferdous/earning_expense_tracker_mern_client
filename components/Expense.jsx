import moment from 'moment';

const Expense = ({expense}) => {
    return (
        <div className="table">
            <span> {moment(expense.timestamp).format('MMMM D, YYYY')} </span>
            <span>{moment(expense.date).format('MMMM D, YYYY')} </span>
            <span>{expense.note}</span>
            <span>{expense.amount} BDT</span>
        </div>
    );
}

export default Expense;