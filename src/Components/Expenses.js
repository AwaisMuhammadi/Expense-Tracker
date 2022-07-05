import './Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import Chart from './Chart';

const Expenses = (props) => {
    const [selectedYear,setSelectedYear] = useState('2020');
    const filterSelectionHandler =(year)=>{
        setSelectedYear(year);
    }
    const filteredExpenses = props.expensesList.filter(expense =>
        expense.date.getFullYear().toString()===selectedYear
    );
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedYear={selectedYear} onSelection={filterSelectionHandler}/>
                <Chart expensesFilteredList={filteredExpenses}/>
                { filteredExpenses.length===0?<h2 className="no-expense">No Expenses Found</h2>: filteredExpenses.map(expense =>
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )}
            </Card>
        </div>
    );
}

export default Expenses;