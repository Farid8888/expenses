import classes from './ExpenseDate.module.css'




const ExpenseDate =(props)=>{
const day = props.date.toLocaleString('en-Us',{day:'2-digit'})
const month = props.date.toLocaleString('en-Us',{month:'long'})
const year = props.date.getFullYear()
    return(
        <div className={classes.date}>
            <div className={classes.month}>{month}</div>
            <div className={classes.day}>{day}</div>
            <div>{year}</div>
        </div>
    )
}

export default ExpenseDate