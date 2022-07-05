import "./ExpenseAddButton.css";
import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

const ExpenseAddButton = (props) =>{
    const [addButtonClickState,setAddButtonClickState] = useState(false);

    const clickHandler = () => {
        setAddButtonClickState(current => !current );
    }
    const saveExpenseData =(expenseDataItem)=>{
        const newExpenseData = {
            ...expenseDataItem,
            id: Math.random().toString()
        };
        props.onAddingNewItem(newExpenseData);
        setAddButtonClickState(current=>!current);
    }
    return(
        <div>
            { !addButtonClickState && <div className="add-expense">
                <button type="button" onClick={clickHandler}>Add Expense</button>
            </div>}
            {addButtonClickState && <NewExpenseForm onSubmission={saveExpenseData} onCancel ={clickHandler} />}
        </div>
    )
}

export default ExpenseAddButton;