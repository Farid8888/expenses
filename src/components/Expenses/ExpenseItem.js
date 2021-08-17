import classes from './ExpenseItem.module.css'
import ExpenseDate from './ExpenseDate'




const ExpenseItem = (props)=>{
    return(
        <div className={classes.item}>
            <ExpenseDate date={props.date}/>
            <div className={classes.expense_item}>
            <span className={classes.title}>{props.title}</span>
            <div className={classes.amountDiv}>
            <span className={classes.amount}>${props.amount}</span>
            </div>
            </div>
        </div>
    )
}

export default ExpenseItem