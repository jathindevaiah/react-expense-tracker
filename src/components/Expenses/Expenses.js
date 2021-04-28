import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter/ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expenses = props.expenses.map((expense) => (
    <ExpenseItem
      key={expense.title}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  ));

  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses.js');
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses}
      </Card>
    </div>
  );
};

export default Expenses;
