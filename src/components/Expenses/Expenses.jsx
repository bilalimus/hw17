import './Expenses.css'
import ExpenseItem from './ExpenseItem'


function Expenses(props) {
    return (
        <div className='expenses'>
            {props.expenses.map((element) => {
          return (
          <ExpenseItem
          key={element.id}
          title={element.title}
          date={element.date}
          amount={element.amount} />
          )
        })}
        </div>
    );
}
export default Expenses;