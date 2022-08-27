import { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'



function ExpenseItem(props){
    const [localTitle, setLocalTitle] = useState(props.title)
function titleChanger (){
    setLocalTitle('updated')
}

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{localTitle}</h2>
                <div className='expense-item__price'>{props.amount}</div>
                <button onClick={titleChanger}>Title Change</button>
            </div>
        </div>
    )
}

export default ExpenseItem