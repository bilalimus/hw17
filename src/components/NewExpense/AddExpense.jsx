import ExpenseForm from "./ExpenseForm"
import './AddExpense.css'

function AddExpense(props) {
    return (
        <div className="new-expense">
            <ExpenseForm addExpenseHandler={props.addExpenseHandler}/>
        </div>
    )
}

export default AddExpense