import "./ExpenseAddButton.css";
import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

const ExpenseAddButton = () =>{
    const [addButtonClickState,setAddButtonClickState] = useState(false);

    const clickHandler = () => {
        setAddButtonClickState(current => !current );
    }
    return(
        <div>
            { !addButtonClickState && <div className="add-expense">
                <button type="button" onClick={clickHandler}>Add Expense</button>
            </div>}
            {addButtonClickState && <NewExpenseForm onCancel ={clickHandler} />}
        </div>
    )
}

export default ExpenseAddButton;