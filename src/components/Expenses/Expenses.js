import './Expenses.css';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
  const expenses = props.expenses.map((expense) => (
    <ExpenseItem
      key={expense.title}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  ));

  return <Card className='expenses'>{expenses}</Card>;
};

export default Expenses;
