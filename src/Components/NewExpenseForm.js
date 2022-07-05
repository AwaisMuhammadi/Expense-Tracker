import "./NewExpenseForm.css";

const NewExpenseForm = (props) =>{
    return(
        <form className="new-expense">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" ></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" ></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" ></input>
                </div>
            </div>
            <div>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;