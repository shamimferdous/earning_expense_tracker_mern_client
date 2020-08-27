import moment from 'moment';

const Earning = ({earning}) => {
    return (
        <div className="table">
            <span> {moment(earning.timestamp).format('MMMM D, YYYY')} </span>
            <span>{moment(earning.date).format('MMMM D, YYYY')} </span>
            <span>{earning.note}</span>
            <span>{earning.amount} BDT</span>
        </div>
    );
}

export default Earning;